'use client'
import { useEffect, useState } from 'react';
import { fetchMovie, fetchMoviesList } from '../../utils/axios';
import HomePageLayout from '../components/HomePage/HomepageLayout';
import { MovieInfo } from '../page';
import { sortValue } from '../components/SortControl/SortControl';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';

export default function MovieDetailsGetter({ searchParams, params }: { searchParams: { [key: string]: string }, params: { movieId: string } }) {
  const movieId = params.movieId;
    const [data, setData] = useState({
        id: '',
        title: 'Such movie is absent',
        poster_path: '',
        release_date: '',
        genres: [''],
        vote_average: '',
        runtime: '',
        overview: ''
    });

    useEffect(() => {
        if(process.env.NODE_ENV !== 'test') {
            const fetchMovieData = async ()=> {
                const result = await fetchMovie(movieId);
                if(result) {
                    setData(result);
                } else {
                    setData({...data, title: 'Such movie is absent'});
                }
            }
            fetchMovieData();
        }
    });

    let query = searchParams.query || '';
    let sortBy = searchParams.sortBy as sortValue || sortValue.default;
    let genre = searchParams.genre || 'All';
    let initialList = [] as MovieInfo[];

    fetchMoviesList(sortBy, query, genre)
    .then(list => {
        initialList = list;
    });

    return (
      <HomePageLayout initialList={initialList}>
        <MovieDetails movieData={data} searchParams={searchParams}/>
      </HomePageLayout>
    )
}