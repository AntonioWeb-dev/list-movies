import axios from 'axios';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { HeaderDiv } from './styled';


export function Header({ movies, setMovies }) {
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
                'x-rapidapi-key': 'f846f92371mshafcf8d65fc00ed8p143bbdjsne78b03918c42'
            }
        });
        let movies = [];
        response.data.results.forEach((movie) => {
            if (movie.titleType) {
                movies.push(movie);
            }
        })

        setMovies(movies);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!textSearch) {
            return;
        }
        await getMovies();
    }
    return (
        <HeaderDiv active={headerActive}>
            <div className="title-header">
                <h1>Catalogare</h1>
            </div>
            <form className="search" onSubmit={handleSubmit}>
                <button><FaSearch size={18} color={"gray"} /></button>

                <input type="text" placeholder="Pesquisar filme, série ou ator" value={textSearch} onChange={e => setTextSearch(e.target.value)} />
            </form>

        </HeaderDiv>
    )
}