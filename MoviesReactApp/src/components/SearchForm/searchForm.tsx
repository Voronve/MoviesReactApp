import React, { FormEvent, KeyboardEvent, ChangeEvent, useState } from 'react';
import './searchForm.css';
import { useSearchParams } from 'react-router-dom';
import { sortValue } from '../SortControl/sortControl';
import config from '../../config.json';
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

    const params = {
        query: searchParams.get('query') ?? '',
        sortBy: searchParams.get('sortBy') as sortValue,
        genre: searchParams.get('genre') ?? config.janres[0]
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        setSearchParams({...params, query: searchQuery});
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setSearchParams({...params, query: searchQuery});
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
                    className="searchFormElement"
                    type="text"
                    placeholder="What do you want to watch?"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}/>
                <button className="searchFormElement" type="submit">Search</button>
            </form>
        </div>
    );
}