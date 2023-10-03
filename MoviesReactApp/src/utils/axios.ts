import axios from 'axios';
import { sortValue } from '../components/SortControl/sortControl';
import { MovieInfo } from '../components/MovieListPage/movieListPage';

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