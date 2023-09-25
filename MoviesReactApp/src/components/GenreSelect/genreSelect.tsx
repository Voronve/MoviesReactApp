import React, { useState } from 'react';
import './genreSelect.css';

export interface GenreSelectProps {
/** List of janres*/
 genreNameList: string[],
 /** Initial selected janre*/
 selectedGenre: string,
 /** callback function for janre menu items*/
 onSelect: (selectedGenre: string) => void
}

/**
 * Ganre select menu
 */
export function GenreSelect({ genreNameList, selectedGenre, onSelect }: GenreSelectProps) {

    return (
        <div className="genresListWrapper">
            <ul className="genresList">
                {genreNameList.map(genreName => {
                    return(<li
                            key={genreName}
                            className={genreName === selectedGenre ? 'selected' : ''}
                            onClick={() => onSelect(genreName)}>
                                {genreName}
                        </li>)
                    }
                )}
            </ul>
        </div>
    );
}