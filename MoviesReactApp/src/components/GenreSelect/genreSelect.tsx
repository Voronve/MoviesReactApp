import React, { useState } from 'react';
import './genreSelect.css';

interface GenreSelectProps {
 genreNameList: string[],
 selectedGenre: string,
 onSelect: (selectedGenre: string) => void
}

export default function GanreSelect({ genreNameList, selectedGenre, onSelect }: GenreSelectProps) {
    const [state, setState] = useState({ genreNameList, selectedGenre, onSelect });

    const handleClick = (genre: string) => {
        setState({...state, selectedGenre: genre});
        state.onSelect(genre);
    }

    return (
        <div className="genresListWrapper">
            <ul className="genresList">
                {state.genreNameList.map(genreName => {
                    return(<li
                            key={genreName}
                            className={genreName === state.selectedGenre ? 'selected' : ''}
                            onClick={() => handleClick(genreName)}>
                                {genreName}
                        </li>)
                    }
                )}
            </ul>
        </div>
    );
}