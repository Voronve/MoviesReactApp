import './movieTile.css';
import { genres } from '../MovieListStateHandler/movieListStateHandler';

interface movieTileProps {
    /** Movie tile data object*/
    movieData: {
        /** Image url*/
        image: string,
        /**Movie title */
        title: string,
        /**Movie release year */
        releaseYear: number,
        /**Movie janres list */
        genres: genres[],
        /** callback function for movie tile been clicked*/
        onClick: (movie: string) => void
    }
}

/** Single movie tile*/
export function MovieTile({ movieData }: movieTileProps ) {
    const {image, title, releaseYear, genres, onClick} = movieData;

    return (
        <div
        className="movieTile"
        onClick={() => onClick(title)}>
            <img src={`/media/${image}`} alt={title} width="322px"/>
            <div className="movieInfo">
                <div className="flex-container">
                    <div className="name">{title}</div>
                    <div className="year">{releaseYear}</div>
                </div>
                <div className="ganres">{genres.join()}</div>
            </div>
        </div>
    );
}