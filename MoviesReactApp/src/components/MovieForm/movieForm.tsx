import React, { FormEvent, KeyboardEvent, ChangeEvent, useState } from 'react';
import { MovieInfo } from '../MovieListStateHandler/movieListStateHandler';
import './movieForm.css';

export interface MovieFormProps {
    movieInfo?: MovieInfo,
    onSubmit: () => void;
}

/** Form for searching movies */
export function MovieForm({ movieInfo, onSubmit }: MovieFormProps) {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit();
    }

    const handleReset = (event: React.MouseEvent) => {
        event.preventDefault();
        alert('Call from reset');
    }

    return (
         <form className='movieForm'>
            <div className="column-2-3">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" defaultValue={movieInfo ? movieInfo.title : ''}/>

                <label htmlFor="movie-url">Movie URL:</label>
                <input type="text" id="movie-url" name="movie-url" defaultValue={movieInfo ? movieInfo.image : ''}/>

                <label>Genre:</label>
                <input type="text" id="janres" name="janres" defaultValue={(movieInfo && movieInfo.genres) ? movieInfo.genres.join(', ') : ''}/>
            </div>

            <div className="column-1-3">
                <label htmlFor="release-date">Release Date:</label>
                <input type="date" id="release-date" name="release-date" defaultValue={movieInfo ? movieInfo.releaseYear : ''}/>

                <label htmlFor="rating">Rating:</label>
                <input type="text" id="rating" name="rating" defaultValue={movieInfo ? movieInfo.rating : ''}/>

                <label htmlFor="runtime">Runtime:</label>
                <input type="text" id="runtime" name="runtime" defaultValue={movieInfo ? movieInfo.duration : ''}/>
            </div>

            <div className="full-width">
                <label htmlFor="overview">Overview:</label>
                <textarea id="overview" name="overview" rows={4} defaultValue={movieInfo ? movieInfo.description : ''}></textarea>
            </div>
            <div className="buttonBlock">
                <button className="resetButton" onClick={handleReset} >RESET</button>
                <button className="submitButton" type='submit' onSubmit={handleSubmit}>SUBMIT</button>
            </div>
        </form>
    );
}