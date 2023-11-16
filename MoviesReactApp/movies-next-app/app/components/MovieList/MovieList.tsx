import styles from './movieList.module.css'
import { MovieTile } from '../MovieTile/MovieTile';
export interface movieListProps {
    /** Movie list*/
    list: {
        id: string,
        poster_path: string;
        title: string;
        release_date: string;
        genres: string[];
        vote_average: string;
        runtime: string;
        overview: string;
    }[]
}

/** Movie list section*/
export function MovieList({ list }: movieListProps) {

    return(
        <div className={styles.moviesList}>
            {
                list.map( movie => {
                    return(
                        <MovieTile movieData={{
                            id: movie.id,
                            poster_path: movie.poster_path,
                            title: movie.title,
                            release_date: movie.release_date,
                            genres: movie.genres}}
                            key={movie.poster_path}/>
                    )
                })
            }
        </div>
    );
}