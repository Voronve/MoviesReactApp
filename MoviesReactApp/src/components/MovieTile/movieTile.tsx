import './movieTile.css';
import { Link, useSearchParams } from 'react-router-dom';
interface movieTileProps {
    /** Movie tile data object*/
    movieData: {
        /**Movie id */
        id: string,
        /** Image url*/
        poster_path: string,
        /**Movie title */
        title: string,
        /**Movie release year */
        release_date: number,
        /**Movie janres list */
        genres: string[]
    },
    movieSelect: () => void;
}

/** Single movie tile*/
export function MovieTile({ movieData, movieSelect }: movieTileProps ) {
    const {id, poster_path, title, release_date, genres} = movieData;
    let [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const sortBy = searchParams.get('sortBy');
    const genre = searchParams.get('genre');

    return (
        <Link to={`/${id}`} state={{ query, sortBy, genre }} >
            <div className="movieTile" onClick={movieSelect}>
                <img src={poster_path} alt={title} width="322px"/>
                <div className="movieInfo">
                    <div className="flex-container">
                        <div className="name">{title}</div>
                        <div className="year">{`${release_date}`.split('-')[0]}</div>
                    </div>
                    <div className="ganres">{genres.join()}</div>
                </div>
            </div>
        </Link>
    );
}