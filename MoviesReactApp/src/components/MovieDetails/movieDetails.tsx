import './movieDetails.css';
import { MovieInfo } from '../MovieListStateHandler/movieListStateHandler';

interface MovieDetailsProps {
    /** All movie data*/
    movieData: MovieInfo
}

/** Movie details section*/
export function MovieDetails({ movieData }: MovieDetailsProps ) {
    if(!Object.keys(movieData).length) {

        return null;
    }

    const {image, title, releaseYear, rating, genres, duration, description} = movieData;

    return (
        <div className="movieDetailsWrapper">
            <div className='poster'>
                <img src={`/media/${image}`} alt={title} width="322px"/>
            </div>
            <div className='movieDataWrapper'>
                <div className="titleAndRating">
                    <div className="title">{title}</div>
                    <div className="rating">{rating}</div>
                </div>
                <div className="ganres">{genres.join()}</div>
                <div className="yearAndDuration">
                    <div className="year">{releaseYear}</div>
                    <div className="duration">{duration}</div>
                </div>
                <div className="description">{description}</div>
            </div>
        </div>
    );
}