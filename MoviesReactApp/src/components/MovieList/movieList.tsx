import './movieList.css'
import { MovieTile } from '../MovieTile/movieTile';
import { MovieInfo } from '../MovieListPage/movieListPage';
interface movieListProps {
    /** Movie list*/
    list: {
        poster_path: string;
        title: string;
        release_date: number;
        genres: string[];
        vote_average: number;
        runtime: string;
        overview: string;
    }[],
    /** callback function for movie tile been clicked*/
    movieClick: (movie: MovieInfo) => void;
}

/** Movie list section*/
export function MovieList({list, movieClick}: movieListProps) {

    return(
        <div className="moviesList">
            {
                list.map( movie => {
                    return(
                        <MovieTile movieData={{
                            poster_path: movie.poster_path,
                            title: movie.title,
                            release_date: movie.release_date,
                            genres: movie.genres,
                            onClick: () => movieClick(movie)}}
                            key={movie.poster_path}/>
                        )})
            }
        </div>
    );
}