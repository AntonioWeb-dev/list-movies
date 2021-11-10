import { useCallback, useEffect, useState } from 'react';
import { useRouteMatch, Route, Link, BrowserRouter } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { MovieModal } from '../../components/movieModal';
import { Header } from '../../components/header';
import { MovieCard } from '../../components/movieCard';
import { MoviesContainter, Container } from '../../config/GlobalStyle';
import { Axios } from '../../service/Axios';

export function MyCatalog() {
    const { path, url } = useRouteMatch();

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const handleLoading = useCallback((value) => {
        setIsLoading(value);
    }, []);

    //getMovieFromCatalog - send a request to get movies that was saved in database
    const getMovieFromCatalog = async () => {
        const response = await Axios.get('/movies');
        setMovies(response.data);
    }

    //useEffect - call the getMovieFromCatalog function 
    useEffect(() => {
        getMovieFromCatalog();
    }, []);

    // there is a BrowserRouter because the modal is other route in that way the code is less dependent 
    return (
        <Container>
            <Header setMovies={setMovies} setIsLoading={handleLoading} catalog />
            {isLoading
                ?
                <div className="no-movies">
                    <ClipLoader loading size={150} color={"red"} />
                </div>
                :
                movies.length !== 0
                    ?
                    <BrowserRouter>
                        <MoviesContainter>
                            {movies.map((movie, index) => (
                                <Link className="movie-link" to={`${url}/${movie.id}`}>
                                    <MovieCard
                                        key={index}
                                        title={movie.title}
                                        image={movie.image}
                                    />
                                </Link>
                            ))
                            }
                        </MoviesContainter>
                        <Route exact path={`${path}/:movieID`}>
                            <MovieModal />
                        </Route>
                    </BrowserRouter>
                    :
                    <div className="no-movies">
                        <h1>Nenhum filme catalogado</h1>
                    </div>
            }

        </Container>
    )
}