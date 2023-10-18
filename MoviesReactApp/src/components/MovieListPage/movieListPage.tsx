
import './movieListPage.css'
import React, { useState, useEffect } from 'react';
import { GenreSelect } from '../GenreSelect/genreSelect';
import { MovieList } from '../MovieList/movieList';
import { SortControl, sortValue } from '../SortControl/sortControl';
import config from '../../config.json';
import { fetchMoviesList } from '../../utils/axios';
import { useSearchParams, Outlet, useLocation } from 'react-router-dom';
import { SearchForm } from '../SearchForm/searchForm';
export interface MovieInfo {
    /** Movie id*/
    id: string;
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
export interface SearchParams {
    searchQueryParam : 'string';
    sortCriterionParam : sortValue;
    activeGenreParam : 'string';
}

/** Movie list functionality section*/
export function MovieListPage() {
    let [searchParams, setSearchParams] = useSearchParams();

    let query = searchParams.get('query');
    let sortBy = searchParams.get('sortBy') as sortValue;
    let genre = searchParams.get('genre') || 'All';

    if(sortBy !== sortValue.date && sortBy !== sortValue.title) sortBy = sortValue.default;

    const [movieList, setMovieList] = useState([] as MovieInfo[]);

    const handleSortCriterionChange = (value: sortValue) => {
        sortBy = value;
        const params = { sortBy } as {query: string, sortBy: sortValue, genre: string};
        if(query) params.query = query;
        if(genre) params.genre = genre;

        setSearchParams(params);
    };

    const handleActiveGenreChange = (value: string) => {
        genre = value;
        const params = { genre } as {query: string, sortBy: sortValue, genre: string};
        if(query) params.query = query;
        if(sortBy) params.sortBy = sortBy;

        setSearchParams(params);
    };

    useEffect(() => {
        if(process.env.NODE_ENV !== 'test') {
            fetchMoviesList(sortBy || sortValue.default, query || '', genre || '', setMovieList);
        }
    },[sortBy, genre, query]);

    return (
        <div className="movieListWrapper">
            <Outlet/>
            <div className="genreDashboard">
                <GenreSelect selectedGenre={genre} onSelect={handleActiveGenreChange}/>
                <SortControl activeSorting={sortBy} sortBy={handleSortCriterionChange}/>
            </div>
            <MovieList list={movieList} />
        </div>
    );
}