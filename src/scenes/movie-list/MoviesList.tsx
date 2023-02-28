import { useEffect, useState } from 'react';
import axios from 'axios';
import MoviesList from '../../elements/components/movies-list/MoviesList';
import { Movie } from '../../types';

type MoviesResponseType = {
    feed: {
        entry: Movie[];
    };
};

function Movies() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState<Movie[] | null>(null);

    useEffect(() => {
        const getMovies = async () => {
            const res = await axios<MoviesResponseType>(
                'https://itunes.apple.com/us/rss/topmovies/limit=100/json',
            ).then((res) => res.data.feed.entry);

            setMovies(res);
            setIsLoading(false);
        };

        getMovies();
    }, []);

    return (
        <>
            {isLoading && <span>Loading...</span>}
            {!!movies?.length && !isLoading && (
                <MoviesList
                    data={movies.map((item) => {
                        return {
                            id: item.id.attributes['im:id'],
                            posterImage: item['im:image'][2].label,
                            title: item['im:name'].label,
                            description: item.summary.label,
                        };
                    })}
                />
            )}
        </>
    );
}

export default Movies;
