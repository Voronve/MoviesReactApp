import React, { useContext } from "react";
import config from '../../../config.json';
import style from './genreSelect.module.css';
import { useEffect, useState } from 'react';
import HomePageContext from '../HomePage/HomePageContext';

/**
 * Ganre select menu
 */
export function GenreSelect() {
    const { genre: selectedGenre, handleActiveGenreChange: onSelect } = useContext(HomePageContext);
    const [activeGenre, setActiveGenre] = useState(selectedGenre);

    useEffect(() => {
        onSelect(activeGenre);
    }, [activeGenre]);

    return (
        <div className={style.genresListWrapper}>
            <ul className={style.genresList}>
                {config.janres.map(genreName => {
                    return(
                        <li
                            key={genreName}
                            className={genreName === selectedGenre ? style.selected : ''}
                            onClick={() => setActiveGenre(genreName)}>
                                {genreName.toUpperCase()}
                        </li>)
                    }
                )}
            </ul>
        </div>
    );
}