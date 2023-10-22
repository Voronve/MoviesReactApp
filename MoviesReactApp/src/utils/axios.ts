import axios from 'axios';
import { sortValue } from '../components/SortControl/sortControl';
import { MovieInfo } from '../components/MovieListPage/movieListPage';
import { MovieFormData } from '../components/MovieForm/movieForm';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/',
  });

export const fetchMoviesList = async (
    sortCriterion: sortValue,
    searchQuery: string,
    activeGenre: string,
    setMovieList: React.Dispatch<React.SetStateAction<MovieInfo[]>>) => {

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
    setMovieList(result.data.data as MovieInfo[]);
}

export const fetchMovie = async (movieId: string = '') => {
    try {
        const movieInfo = (await axiosInstance.get(`movies/${movieId}`)).data as MovieInfo;

        if(!movieInfo) return null;

        // const releaseDate = new Date(movieInfo.release_date);
        // movieInfo.release_date = `${releaseDate.getFullYear()}-${releaseDate.g() - 1}-${releaseDate.getDate() - 1}`;

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