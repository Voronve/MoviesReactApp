import styles from './MovieDetails.module.css';
import { MovieInfo } from '@/app/page';
import formQueryParamString from '@/helpers/formQueryParamsString';
import Link from 'next/link';

export interface MovieDetailsProps {
    /** All movie data*/
    movieData: MovieInfo | null,
    searchParams: { [key: string]: string }
}

/** Movie details section*/
export function MovieDetails({ movieData, searchParams }: MovieDetailsProps ) {
    if(!movieData || !Object.keys(movieData).length) {
        return null;
    }

    const {poster_path, title, release_date, vote_average, genres, runtime, overview} = movieData;
    const resultString = formQueryParamString(searchParams);

    return (
        <div className={styles.movieDetailsWrapper}>
            <div className={styles.poster}>
                <img src={`${poster_path}`} alt={title} width="322px"/>
            </div>
            <div className={styles.movieDataWrapper}>
                <div className={styles.titleAndRating}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.voteAverage}>{vote_average}</div>
                </div>
                <div className={styles.ganres}>{genres.join()}</div>
                <div className={styles.yearAndDuration}>
                    <div className={styles.year}>{release_date}</div>
                    <div className={styles.runtime}>{runtime}</div>
                </div>
                <div className={styles.overview}>{overview}</div>
            </div>
            <Link href={`/${resultString}`}>X</Link>
        </div>
    );
}