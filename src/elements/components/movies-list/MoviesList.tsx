import MovieListItem from '../movie-list-item/MovieListItem';
import { MovieListItem as MovieListItemProps } from '../../../types';
import { useFavorites } from '../../../store';

type MovieListProps = {
    data: MovieListItemProps[];
};

export default function MoviesList({ data }: MovieListProps) {
    const { favorites } = useFavorites();

    return (
        <ul className={['flex', 'flex-col', 'p-8', 'gap-8'].join(' ')}>
            {!!data.length &&
                data.map((movie) => (
                    <li key={movie.id} className={['flex', 'font-sans'].join(' ')}>
                        <MovieListItem
                            data={movie}
                            isFavorite={!!favorites.find(({ id }) => id === movie.id)}
                        />
                    </li>
                ))}
        </ul>
    );
}
