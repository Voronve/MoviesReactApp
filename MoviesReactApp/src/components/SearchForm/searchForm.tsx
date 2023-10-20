import React, { FormEvent, KeyboardEvent, ChangeEvent, useState } from 'react';
import './searchForm.css';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { sortValue } from '../SortControl/sortControl';
import formQueryParamString from '../../helpers/formQueryParamsString';
export interface SearchFormProps {
/**
 * Initial search value
 */
 input: string,
/**
 * Callbeck function to be called on search
 */
 onSearch: (searchText: string) => void,
}

/** Form for searching movies */
export function SearchForm() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const resultString = formQueryParamString(searchParams);

    const sortBy = searchParams.get('sortBy') as sortValue;
    const genre = searchParams.get('genre');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const params = {} as {query: string, sortBy: sortValue, genre: string};
        if(searchQuery) params.query = searchQuery;
        if(sortBy) params.sortBy = sortBy;
        if(genre) params.genre = genre;

        setSearchParams(params);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {

        if (event.key === 'Enter') {
            event.preventDefault();
            const params = {} as {query: string, sortBy: sortValue, genre: string};
            if(searchQuery) params.query = searchQuery;
            if(sortBy) params.sortBy = sortBy;
            if(genre) params.genre = genre;
            setSearchParams(params);
        }
      };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.currentTarget.value);
    };

    return (
        <div className="searchContainer">
            <h1>FIND YOUR MOVIE</h1>
            <form className="searchForm" onSubmit={handleSubmit}>
                <input
                    defaultValue={searchParams.get('query') || ''}
                    className="searchFormElement"
                    type="text"
                    placeholder="What do you want to watch?"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}/>
                <button className="searchFormElement" type="submit">Search</button>
            </form>
            <Link to={`/new${resultString}`}><div className='addMovie'>+ add movie</div></Link>
            <Outlet/>
        </div>
    );
}