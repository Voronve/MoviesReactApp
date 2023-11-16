'use client'
import React, { FormEvent, KeyboardEvent, ChangeEvent, useState } from 'react';
import styles from './SearchForm.module.css';
import { sortValue } from '../SortControl/SortControl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
//import { sortValue } from '../SortControl/sortControl';
import formQueryParamString from '../../../helpers/formQueryParamsString';
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
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const queryParams = {
        query: searchParams.get('query') || '',
        sortBy: searchParams.get('sortBy') || '',
        genre: searchParams.get('genre') || ''
    };
    const resultString = formQueryParamString(queryParams);

    const sortBy = searchParams.get('sortBy') as sortValue;
    const genre = searchParams.get('genre');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const paramsArr: string[] = [];

        if(searchQuery) paramsArr.push(`query=${searchQuery}`);
        if(sortBy) paramsArr.push(`sortBy=${sortBy}`);
        if(genre) paramsArr.push(`genre=${genre}`);

        const newSearchParams = paramsArr.length ? `?${paramsArr.join('&')}` : '';
        router.push(`${pathname}${newSearchParams}`);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const paramsArr: string[] = [];

            if(searchQuery) paramsArr.push(`query=${searchQuery}`);
            if(sortBy) paramsArr.push(`sortBy=${sortBy}`);
            if(genre) paramsArr.push(`genre=${genre}`);

            const newSearchParams = paramsArr.length ? `?${paramsArr.join('&')}` : '';
            router.push(`${pathname}${newSearchParams}`);
        }
      };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.currentTarget.value);
    };

    return (
        <div className={styles.searchContainer}>
            <h1>FIND YOUR MOVIE</h1>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <input
                    defaultValue={searchParams.get('query') || ''}
                    className={styles.searchFormElement}
                    type="text"
                    placeholder="What do you want to watch?"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}/>
                <button className={styles.searchFormElement} type="submit">Search</button>
            </form>
            <Link href={`/new${resultString}`}><div className={styles.addMovie}>+ add movie</div></Link>
        </div>
    );
}