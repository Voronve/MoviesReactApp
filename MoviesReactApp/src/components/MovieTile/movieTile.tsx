import './movieTile.css';
import { Link, useSearchParams } from 'react-router-dom';
import formQueryParamString from '../../helpers/formQueryParamsString';
export interface movieTileProps {
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
    }
}

/** Single movie tile*/
export function MovieTile({ movieData }: movieTileProps ) {
    const {id, poster_path, title, release_date, genres} = movieData;
    const [searchParams] = useSearchParams();
    const resultString = formQueryParamString(searchParams);

    return (
        <Link to={`/${id}${resultString}`}>
            <div className="movieTile">
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