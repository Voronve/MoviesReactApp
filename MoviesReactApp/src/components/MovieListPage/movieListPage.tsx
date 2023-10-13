
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

    const query = searchParams.get('query');
    let sortBy = searchParams.get('sortBy') as sortValue;
    const genre = searchParams.get('genre');

    if(sortBy !== sortValue.date && sortBy !== sortValue.title) sortBy = sortValue.default;

    const [sortCriterion, setSortCriterion] = useState(sortBy as sortValue);
    const [activeGenre, setActiveGenre] = useState(genre ?? 'All');
    const [searchQuery, setSearchQuery] = useState(query);
    const [movieList, setMovieList] = useState([] as MovieInfo[]);
    const [selectedMovie, setSelectedMovie] = useState(null as MovieInfo | null);

    const handleSortCriterionChange = (value: sortValue) => {
        setSortCriterion(value);

        const queryParams = {} as {query: string, sortBy: string, genre: string};
        queryParams['sortBy'] = sortCriterion;
        if(activeGenre) queryParams['genre'] = activeGenre;
        if(searchQuery) queryParams['query'] = searchQuery;

        setSearchParams(queryParams);
    };

    const handleActiveGenreChange = (value: string) => {
        setActiveGenre(value);

        const queryParams = {} as {query: string, sortBy: string, genre: string};
        queryParams['genre'] = activeGenre;
        if(activeGenre) queryParams['sortBy'] = sortCriterion;
        if(searchQuery) queryParams['query'] = searchQuery;

        setSearchParams(queryParams);
    };

    const handleSearchQuery = (value: string) => {
        setSearchQuery(value);
    };

    useEffect(() => {
        if(process.env.NODE_ENV !== 'test') {
            fetchMoviesList(sortCriterion, searchQuery, activeGenre, setMovieList);
        }
    },[sortCriterion, activeGenre, searchQuery]);

    return (
        <div className="movieListWrapper">
            <Outlet/>
            <div className="genreDashboard">
                <GenreSelect selectedGenre={activeGenre} onSelect={handleActiveGenreChange}/>
                <SortControl activeSorting={sortCriterion} sortBy={handleSortCriterionChange}/>
            </div>
            <MovieList list={movieList} movieSelect={setSelectedMovie}/>
        </div>
    );
}