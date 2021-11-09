import { useState } from 'react';
import { Header } from '../../components/header';
import { MovieCard } from '../../components/movieCard';
import { Container, MoviesContainter } from './styled';

export default function MoviePage() {
    const [movies, setMovies] = useState([]);

    return (
        <Container>
            <Header movies={movies} setMovies={setMovies} />

            {movies.length !== 0
                ?
                <MoviesContainter>
                    {movies.map((movie) => {
                        return <MovieCard key={movie.id} title={movie.title} image={movie.image?.url} />
                    })
                    }
                    {movies.map((movie) => {
                        return <MovieCard key={movie.id} title={movie.title} image={movie.image?.url} />
                    })
                    }
                    {movies.map((movie) => {
                        return <MovieCard key={movie.id} title={movie.title} image={movie.image?.url} />
                    })
                    }
                    {movies.map((movie) => {
                        return <MovieCard key={movie.id} title={movie.title} image={movie.image?.url} />
                    })
                    }
                </MoviesContainter>
                :
                <div className="no-movies">
                    <h1>Nenhum filme pesquisado</h1>
                </div>
            }
        </Container>
    )
}