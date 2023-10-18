import './movieDetails.css';
import { MovieInfo } from '../MovieListPage/movieListPage';
import { Link, useSearchParams } from 'react-router-dom';
import formQueryParamString from '../../helpers/formQueryParamsString';

export interface MovieDetailsProps {
    /** All movie data*/
    movieData: MovieInfo | null;
}

/** Movie details section*/
export function MovieDetails({ movieData }: MovieDetailsProps ) {
    const [searchParams] = useSearchParams();
    if(!movieData || !Object.keys(movieData).length) {

        return null;
    }

    const {poster_path, title, release_date, vote_average, genres, runtime, overview} = movieData;
    const resultString = formQueryParamString(searchParams);

    return (
        <div className="movieDetailsWrapper">
            <div className='poster'>
                <img src={`${poster_path}`} alt={title} width="322px"/>
            </div>
            <div className='movieDataWrapper'>
                <div className="titleAndRating">
                    <div className="title">{title}</div>
                    <div className="vote_average">{vote_average}</div>
                </div>
                <div className="ganres">{genres.join()}</div>
                <div className="yearAndDuration">
                    <div className="year">{release_date}</div>
                    <div className="runtime">{runtime}</div>
                </div>
                <div className="overview">{overview}</div>
            </div>
            <Link to={`/${resultString}`}>X</Link>
        </div>
    );
}