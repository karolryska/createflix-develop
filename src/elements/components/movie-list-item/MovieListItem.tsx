import { useFavorites } from '../../../store';
import { MovieListItem as MovieListItemType } from '../../../types';

type MovieListItemProps = {
    data: MovieListItemType;
    isFavorite: boolean;
};

export default function MovieListItem({ data, isFavorite }: MovieListItemProps) {
    const { id, title, posterImage, description } = data;

    const { addFavorite, removeFavorite } = useFavorites();

    const handleButtonClick = () => (isFavorite ? removeFavorite(id) : addFavorite(data));

    return (
        <article className={['shadow-xl', 'h-max', 'rounded-2xl', 'overflow-hidden'].join(' ')}>
            <div className={['flex', 'font-sans'].join(' ')}>
                <div className={['flex-none', 'w-48', 'relative'].join(' ')}>
                    <img
                        src={posterImage}
                        alt='Movie Poster'
                        className={['absolute', 'inset-0', 'w-full', 'h-full', 'object-cover'].join(
                            ' ',
                        )}
                    />
                </div>
                <div className={['flex-auto', 'p-6'].join(' ')}>
                    <div className={['flex', 'flex-wrap'].join(' ')}>
                        <h3
                            className={[
                                'flex-auto',
                                'text-lg',
                                'font-semibold',
                                'text-slate-900',
                            ].join(' ')}>
                            {title}
                        </h3>
                        <div
                            className={['text-lg', 'font-semibold', 'text-slate-500', 'mb-4'].join(
                                ' ',
                            )}>
                            <button
                                className={[
                                    'flex-none',
                                    'flex',
                                    'items-center',
                                    'justify-center',
                                    'w-9',
                                    'h-9',
                                    'rounded-md',
                                    'text-slate-300',
                                    'border',
                                    'border-slate-200',
                                ].join(' ')}
                                onClick={handleButtonClick}
                                type='button'
                                aria-label='Like'>
                                <svg
                                    width='20'
                                    height='20'
                                    fill={isFavorite ? 'red' : 'black'}
                                    aria-hidden='true'>
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        className={['flex', 'space-x-4', 'mb-6', 'text-sm', 'font-medium'].join(
                            ' ',
                        )}
                    />
                    <p className={['text-sm', 'text-slate-700'].join(' ')}>{description}</p>
                </div>
            </div>
        </article>
    );
}
