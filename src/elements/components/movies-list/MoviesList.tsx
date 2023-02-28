import MovieListItem from '../movie-list-item/MovieListItem';
import { MovieListItem as MovieListItemProps } from '../../../types';

type MovieListProps = {
    data: MovieListItemProps[];
};

export default function MoviesList({ data }: MovieListProps) {
    return (
        <ul className={['flex', 'flex-col'].join(' ')}>
            {!!data.length &&
                data.map((movie) => (
                    <li className={['flex', 'font-sans'].join(' ')}>
                        <MovieListItem data={movie} />
                    </li>
                ))}
        </ul>
    );
}
