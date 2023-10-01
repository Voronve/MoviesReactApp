import React, { FormEvent, KeyboardEvent, ChangeEvent, useState } from 'react';
import './searchForm.css';

export interface SearchFormProps {
/**
 * Initial search value
 */
 input: string,
/**
 * Callbeck function to be called on search
 */
 onSearch: (searchText: string) => void
}

/** Form for searching movies */
export function SearchForm({ input, onSearch }: SearchFormProps) {
    const [state, setState] = useState({ search: input, onSearch });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        state.onSearch(state.search);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            state.onSearch(state.search);
        }
      };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({...state, search: event.currentTarget.value});
    };

    return (
        <div className="searchContainer">
            <button></button>
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