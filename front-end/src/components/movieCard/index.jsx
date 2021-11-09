import { Card } from './styled';

export function MovieCard({ title, image }) {
    return (
        <Card>
            <img src={image} alt="movie" />

        </Card>
    )
}