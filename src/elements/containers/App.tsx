import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import AppHeader from '../components/app-header/AppHeader';
import AppFooter from '../components/app-footer/AppFooter';
import MovieListItem from '../components/movie-list-item/MovieListItem';
import { Movie } from '../../types';

type MoviesResponseType = {
    feed: {
        entry: Movie[];
    };
};

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState<Movie[] | null>(null);

    useEffect(() => {
        const getMovies = async () => {
            const myMovies = await axios<MoviesResponseType>(
                'https://itunes.apple.com/us/rss/topmovies/limit=100/json',
            ).then((res) => res.data.feed.entry);

            setMovies(myMovies);
            setIsLoading(false);
        };

        getMovies();
    }, []);

    return (
        <div className='App'>
            <AppHeader />

            <main>
                {isLoading && <span>Loading...</span>}
                {!!movies &&
                    !isLoading &&
                    movies.map((item) => (
                        <MovieListItem
                            data={{
                                posterImage: item['im:image'][0].label,
                                title: item['im:name'].label,
                                description: item.summary.label,
                            }}
                        />
                    ))}
            </main>
            <AppFooter />
        </div>
    );
}

export default App;
