'use client'
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
import styles from './homePage.module.css';
import { MovieList } from '../../components/MovieList/MovieList';
import { SortControl, sortValue } from '../SortControl/SortControl';
import { GenreSelect } from '../GenreSelect/GenreSelect';
import { MovieInfo } from '@/app/page';
import { fetchMoviesList } from '@/utils/axios';
import HomePageContext from './HomePageContext';
import formQueryParamString from '@/helpers/formQueryParamsString';

export default function HomePageLayout({ initialList, children }: { initialList: MovieInfo[], children: React.ReactNode}) {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  let query = searchParams.get('query');
  let sortBy = searchParams.get('sortBy') as sortValue;
  let genre = searchParams.get('genre') || 'All';
  let shouldUpdateList = searchParams.get('shouldUpdateList') || null;
  if(sortBy !== sortValue.date && sortBy !== sortValue.title) sortBy = sortValue.default;

  const [movieList, setMovieList] = useState(initialList || []);

  const handleSortCriterionChange = (value: sortValue) => {
    sortBy = value;
    const queryParams = {
      query: searchParams.get('query') || '',
      sortBy: value,
      genre: searchParams.get('genre') || ''
    };
    const resultString = formQueryParamString(queryParams);
    router.push(`${pathname}${resultString}`);
  };

  const handleActiveGenreChange = (value: string) => {
    genre = value;
    const queryParams = {
      query: searchParams.get('query') || '',
      sortBy: searchParams.get('sortBy') || '',
      genre: value
    };
    const resultString = formQueryParamString(queryParams);
    router.push(`${pathname}${resultString}`);
  };

  useEffect(() => {
    fetchMoviesList(sortBy || sortValue.default, query || '', genre || '')
      .then(list => setMovieList(list));
  },[sortBy, genre, query, shouldUpdateList]);

  return (
    <>
      {children}
      <div className={styles.genreDashboard}>
        <HomePageContext.Provider value={{genre, sortBy, handleActiveGenreChange, handleSortCriterionChange}}>
            <GenreSelect />
            <SortControl />
        </HomePageContext.Provider>
      </div>
      <MovieList list={movieList} />
      <div id='dialogContainer'></div>
    </>
  )
}
