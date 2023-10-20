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
        const result = await axiosInstance.get(`movies/${movieId}`);
        if(result?.data) {
            return result.data as MovieInfo
        } else {
            return null;
        }
    } catch(e) {
        return null;
    }
}

export const addMovie = async (movieData: MovieFormData) => {
    const genres = movieData.genres.split(', ');
    const release_date = new Date(movieData.release_date);
    try {
        const result = await axiosInstance.post(`movies`, {
            title: movieData.title,
            vote_average: Number(movieData.vote_average),
            release_date,
            poster_path: movieData.poster_path,
            overview: movieData.overview,
            runtime: Number(movieData.runtime),
            genres

        });
        if(result?.data) {
            return result.data as MovieInfo
        } else {
            console.log(`Result: ${JSON.stringify(result, null, 2)}`);
            return null;
        }
    } catch(e) {
        console.log(`Result: ${JSON.stringify(e, null, 2)}`);
        return null;
    }
}