
import './movieListStateHandler.css'
import React, { useState } from 'react';
import { GenreSelect } from '../GenreSelect/genreSelect';
import { MovieList } from '../MovieList/movieList';
import { MovieDetails } from '../MovieDetails/movieDetails';
import { SortControl } from '../SortControl/sortControl';
import { Dialog } from '../Dialog/dialog';


export interface MovieInfo {
    /** Image url*/
    image: string;
    /**Movie title */
    title: string;
    /**Movie release year */
    releaseYear: number;
    /**Movie janres list */
    genres: string[];
    /**Movie rating */
    rating: number;
    /**Movie length */
    duration: string;
    /**Movie description */
    description: string;
}

export enum genres {
    all = "ALL",
    documentary = "DOCUMENTARY",
    comedy = "COMEDY",
    horror = "HORROR",
    crime = "CRIME"
}

interface MovieListStateHandlerProps {
    /** Movie list*/
    moviesList: MovieInfo[],
    /** janres list*/
    janres: string[],
}

/** Movie list functionality section*/
export function MovieListStateHandler({ moviesList, janres }: MovieListStateHandlerProps){
    const [state, setState] = useState({
        moviesList,
        janres,
        selectedGenre: janres[0],
        movieDetailedData: {} as MovieInfo,
        filteredMovies: moviesList });

        const genreClick = (genre: string) => {

            const filteredMovies = genre === genres.all ?
                state.moviesList :
                state.moviesList.filter(movie => movie.genres.includes(genre));

            setState({...state, filteredMovies: filteredMovies, selectedGenre: genre});
        }

        const sortMovieBy = (sortBy: 'default' | 'date' | 'title') => {
            let sortedMoviesList = [];

            switch(sortBy) {
                case 'date':
                    sortedMoviesList = state.filteredMovies.sort( (prev, next) => next.releaseYear - prev.releaseYear );
                    break;
                case 'title':
                    sortedMoviesList = state.filteredMovies.sort( (prev, next) => prev.title.localeCompare(next.title));
                    break;
                default:
                    sortedMoviesList = state.filteredMovies;
            }
            setState({...state, filteredMovies: sortedMoviesList});
        }

        const movieClick = (title: string) => {
            const index = state.moviesList.findIndex(movie => movie.title === title)
            setState({...state, movieDetailedData: state.moviesList[index]});
        }

    return (
        <div className="movieListWrapper">
            <MovieDetails movieData={state.movieDetailedData}/>
            <div className="genreDashboard">
                <GenreSelect genreNameList={state.janres} selectedGenre={state.selectedGenre} onSelect={genreClick}/>
                <SortControl sortBy={sortMovieBy}/>
            </div>
            <MovieList  list={state.filteredMovies} movieClick={movieClick}/>
        </div>
    );
}