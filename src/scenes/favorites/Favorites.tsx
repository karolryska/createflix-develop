import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieListItem from '../../elements/components/movie-list-item/MovieListItem';
import { Movie } from '../../types';
import MoviesList from '../../elements/components/movies-list/MoviesList';
import { useFavorites } from '../../store';

function Favorites() {
    const { favorites } = useFavorites();

    return favorites.length ? (
        <MoviesList data={favorites} />
    ) : (
        <span>You don't have any favorite movies yet</span>
    );
}

export default Favorites;
