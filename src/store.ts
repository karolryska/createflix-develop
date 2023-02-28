import { create } from 'zustand';
import { MovieListItem } from './types';

type State = {
    favorites: MovieListItem[] | [];
    addFavorite: (data: MovieListItem) => void;
    removeFavorite: (id: string) => void;
};

export const useFavorites = create<State>((set) => ({
    favorites: [],
    addFavorite: (data) =>
        set((state) => {
            return { favorites: [...state.favorites, data] };
        }),
    removeFavorite: (id) =>
        set((state) => {
            return {
                favorites: [...state.favorites.filter(({ id: favoriteId }) => favoriteId !== id)],
            };
        }),
}));
