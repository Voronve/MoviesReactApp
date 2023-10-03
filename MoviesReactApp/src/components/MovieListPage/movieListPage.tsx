
import './movieListPage.css'
import React, { useState, useEffect } from 'react';
import { GenreSelect } from '../GenreSelect/genreSelect';
import { MovieList } from '../MovieList/movieList';
import { MovieDetails } from '../MovieDetails/movieDetails';
import { SortControl, sortValue } from '../SortControl/sortControl';
import { SearchForm } from '../SearchForm/searchForm';
import config from '../../config.json';
import { fetchMoviesList } from '../../utils/axios';

export interface MovieInfo {
    /** Image url*/
    poster_path: string;
    /**Movie title */
    title: string;
    /**Movie release year */
    release_date: number;
    /**Movie janres list */
    genres: string[];
    /**Movie vote_average */
    vote_average: number;
    /**Movie length */
    runtime: string;
    /**Movie overview */
    overview: string;
}

/** Movie list functionality section*/
export function MovieListPage(){
    const [searchQuery, setSearchQuery] = useState('');
    const [sortCriterion, setSortCriterion] = useState(sortValue.default);
    const [activeGenre, setActiveGenre] = useState(config.janres[0]);
    const [movieList, setMovieList] = useState([] as MovieInfo[]);
    const [selectedMovie, setSelectedMovie] = useState(null as MovieInfo | null);

    useEffect(() => {
        if(process.env.NODE_ENV !== 'test') {
            fetchMoviesList(sortCriterion, searchQuery, activeGenre, setMovieList);
        }
    }, [searchQuery, sortCriterion, activeGenre]);

    return (
        <>
            <div className="movieListWrapper">
                { selectedMovie ?
                  <MovieDetails movieData={selectedMovie}/> :
                  <SearchForm input={searchQuery} onSearch={ setSearchQuery }/>}
                <div className="genreDashboard">
                    <GenreSelect selectedGenre={activeGenre} onSelect={setActiveGenre}/>
                    <SortControl  activeSorting={sortCriterion} sortBy={setSortCriterion}/>
                </div>
                <MovieList  list={movieList} movieClick={setSelectedMovie}/>
            </div>
        </>
    );
}