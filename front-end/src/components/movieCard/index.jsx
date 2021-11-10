import { Card } from './styled';

export function MovieCard({ title, image }) {
    return (
        <Card>
            <img src={image} alt="movie" />
            <div className="title">
                <h3>{title}</h3>
            </div>
        </Card>
    )
}