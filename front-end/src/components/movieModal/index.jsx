import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ModalDiv, Main } from './styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Axios } from '../../service/Axios';

import ClipLoader from "react-spinners/ClipLoader";


export function MovieModal() {
    const { movieID } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const { url } = useRouteMatch();

    const onClose = () => {
        history.push('/movies');
    }

    // useEffect- to get movie's info by id
    useEffect(() => {
        const getMovie = async () => {
            const reponse = await axios.get(
                `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${movieID}&?currentCountry=PT`, {
                headers: {
                    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                    'x-rapidapi-key': process.env.REACT_APP_API_KEY
                }
            });
            setMovie(reponse.data);
            setIsLoading(false);
        }
        getMovie()
    }, [movieID])

    // handleCatalog - ser a movie object like the backend recive
    const handleCatalog = async () => {
        let movieToSend = {};
        movieToSend.title = movie.title.title
        movieToSend.image = movie.title.image.url
        movieToSend.description = movie?.plotSummary?.text
        movieToSend.id = movieID;
        const response = await Axios.post('/movies', movieToSend);

        // here I let status 500 pass too in case of the movie have already insert
        if (response.status === 204 || response.status === 500) {
            onClose()
        }
    }

    return (
        <ModalDiv>
            <Main>
                {isLoading
                    ?
                    <div className="loading">
                        <ClipLoader loading size={150} color={"red"} />
                    </div>
                    :
                    <>

                        <div className="movie-image">
                            <div className="exit" onClick={onClose}>
                                <AiOutlineCloseCircle size={35} color={"gray"} cursor={"pointer"} />
                            </div>
                            <img src={movie?.title?.image?.url} alt="movie" />
                            <div className="shadow"></div>
                        </div>
                        <div className="movie-title">
                            <h1>{movie?.title?.title}</h1>
                        </div>
                        <div className="movie-description">
                            <h3>Descrição</h3>
                            <p>{movie?.plotSummary?.text}</p>

                        </div>
                        {/meucatalogo/.test(url)
                            ?
                            null
                            :
                            <div className="button-C">
                                <button onClick={handleCatalog}>Catalogar</button>
                            </div>
                        }
                    </>
                }
            </Main>
        </ModalDiv>
    )
}