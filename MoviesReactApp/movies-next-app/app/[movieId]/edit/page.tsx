import React from 'react';
import MovieForm from '../../components/MovieForm/MovieForm';
import { sortValue } from '../../components/SortControl/SortControl';
import { fetchMoviesList } from '@/utils/axios';
import HomePageLayout from '../../components/HomePage/HomepageLayout';
import { MovieInfo } from '../../page';
import { Dialog } from '../../components/Dialog/Dialog';

/**
 * Custom dialog window
 */
export default async function AddNewMovie({ searchParams, params }: {searchParams: { [key: string]: string }, params: {movieId: string} }) {
    let query = searchParams.query || '';
    let sortBy = searchParams.sortBy as sortValue || sortValue.default;
    let genre = searchParams.genre || 'All';
    let initialList = [] as MovieInfo[];

    fetchMoviesList(sortBy, query, genre).then(list => {
        initialList = list;
    });

    return (
        <HomePageLayout initialList={initialList}>
            <Dialog title='Edit movie' searchParams={searchParams}>
                <MovieForm movieId={params.movieId}></MovieForm>
            </Dialog>
        </HomePageLayout>
    );
}