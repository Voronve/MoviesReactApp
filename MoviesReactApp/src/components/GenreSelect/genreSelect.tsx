import config from '../../config.json';
import './genreSelect.css';

export interface GenreSelectProps {
 /** Initial selected janre*/
 selectedGenre: string,
 /** callback function for janre menu items*/
 onSelect: (selectedGenre: string) => void
}

/**
 * Ganre select menu
 */
export function GenreSelect({ selectedGenre, onSelect }: GenreSelectProps) {

    return (
        <div className="genresListWrapper">
            <ul className="genresList">
                {config.janres.map(genreName => {
                    return(<li
                            key={genreName}
                            className={genreName === selectedGenre ? 'selected' : ''}
                            onClick={() => onSelect(genreName)}>
                                {genreName.toUpperCase()}
                        </li>)
                    }
                )}
            </ul>
        </div>
    );
}