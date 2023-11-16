import axios from 'axios';
import { MovieInfo } from '@/app/page';
import { sortValue } from '@/app/components/SortControl/SortControl';
import { MovieFormData } from '@/app/components/MovieForm/MovieForm';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/',
  });

export const fetchMoviesList = async (
    sortCriterion: sortValue,
    searchQuery: string,
    activeGenre: string ) => {
    const result = await axiosInstance.get('movies', {
        params: {
            offset: 0,
            limit: 50,
            sortOrder: sortCriterion === sortValue.date ? 'desc' : 'asc',
            sortBy: sortCriterion !== sortValue.default ? sortCriterion : '',
            searchBy: 'title',
            search: searchQuery,
            filter: activeGenre.toLowerCase() === 'all' ? '' : activeGenre
        }
    });
    const moviesList = result?.data?.data as MovieInfo[];

    return moviesList ?? [];
}

export const fetchMovie = async (movieId: string = '') => {
    try {
        const movieInfo = (await axiosInstance.get(`movies/${movieId}`)).data as any;

        if(!movieInfo) return null;

        return movieInfo;
    } catch(e) {

        return null;
    }
}

export const addMovie = async (movieData: MovieFormData) => {
    const genres = movieData.genres.split(', ');
    try {
        const result = await axiosInstance.post(`movies`, {
            title: movieData.title,
            vote_average: Number(movieData.vote_average),
            release_date: movieData.release_date,
            poster_path: movieData.poster_path,
            overview: movieData.overview,
            runtime: Number(movieData.runtime),
            genres

        });
        if(result?.data) {
            return result.data as MovieInfo
        } else {
            return null;
        }
    } catch(e) {
        return null;
    }
}

export const editMovie = async (movieData: MovieFormData) => {
    const genres = movieData.genres.split(', ');
    try {
        const result = await axiosInstance.put(`movies`, {
            id: Number(movieData.id),
            title: movieData.title,
            vote_average: Number(movieData.vote_average),
            release_date : movieData.release_date,
            poster_path: movieData.poster_path,
            overview: movieData.overview,
            runtime: Number(movieData.runtime),
            genres
        });

        if(result?.data) {
            return result.data as MovieInfo
        } else {
            return null;
        }
    } catch(e) {
        return null;
    }
}

export const deleteMovie = async (movieId: string) => {
    try {
        const status = (await axiosInstance.delete(`movies/${movieId}`)).status;

        if(status !== 204) return false;

        return true;
    } catch(e) {

        return false;
    }
}