import axios from 'axios';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HeaderDiv } from './styled';


export function Header({ setMovies, setIsLoading, catalog = false }) {
    const [textSearch, setTextSearch] = useState('');
    const [headerActive, setHeaderActive] = useState(false);

    document.addEventListener("scroll", function () {
        var posicaoy = window.pageYOffset;
        if (posicaoy >= 50) {
            setHeaderActive(true)
        } else {
            setHeaderActive(false)
        }
    });

    const getMovies = async () => {
        const response = await axios.get(`https://imdb8.p.rapidapi.com/title/find?q=${textSearch}`, {
            headers: {
                'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`
            }
        });
        let movies = [];
        response.data.results.forEach((movie) => {
            if (movie.titleType && movie?.image?.url) {
                const movieEdited = {
                    id: movie.id.split('/')[2],
                    image: movie.image?.url,
                    title: movie.title
                }
                movies.push(movieEdited);
            }
        })
        setMovies(movies);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!textSearch) {
            return;
        }
        setIsLoading(true);

        await getMovies();
        setIsLoading(false)

    }
    return (
        <HeaderDiv active={headerActive}>
            <nav>
                <div className="title-header">
                    <Link to="/movies">Catalogare</Link>
                </div>
                <Link className="my-catalog" to="/meucatalogo">Meu Catálago </Link>
            </nav>
            {catalog
                ?
                null
                :
                <form className="search" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Pesquisar filme, série ou ator" value={textSearch} onChange={e => setTextSearch(e.target.value)} />
                    <button type="submit"><AiOutlineSearch size={26} color={"gray"} cursor={"pointer"} /></button>
                </form>
            }

        </HeaderDiv>
    )
}