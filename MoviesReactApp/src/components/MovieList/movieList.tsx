import './movieList.css'
import { MovieTile } from '../MovieTile/movieTile';
import { genres } from '../MovieListStateHandler/movieListStateHandler';

interface movieListProps {
    /** Movie list*/
    list: {
        image: string;
        title: string;
        releaseYear: number;
        genres: string[];
        rating: number;
        duration: string;
        description: string;
    }[],
    /** callback function for movie tile been clicked*/
    movieClick: (title: string) => void;
}

/** Movie list section*/
export function MovieList({list, movieClick}: movieListProps) {

    return(
        <div className="moviesList">
            {
                list.map( movie => { 
                    return(
                        <MovieTile movieData={{
                            image: movie.image,
                            title: movie.title,
                            releaseYear: movie.releaseYear,
                            genres: movie.genres as genres[],
                            onClick: movieClick}}
                            key={movie.title}/>
                        )})
            }
        </div>
    );
}