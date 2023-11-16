'use client'
import React, { useEffect, useState } from 'react';
import styles from './Movieform.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import formQueryParamString from '@/helpers/formQueryParamsString';
import { useForm, SubmitHandler } from 'react-hook-form';
import { addMovie, editMovie, fetchMovie } from '@/utils/axios';

export interface MovieFormProps {
    movieId?: string,
}

export interface MovieFormData {
    /** Movie id*/
    id: string;
    /** Image url*/
    poster_path: string;
    /**Movie title */
    title: string;
    /**Movie release year */
    release_date: number;
    /**Movie janres list */
    genres: string;
    /**Movie vote_average */
    vote_average: string;
    /**Movie length */
    runtime: string;
    /**Movie overview */
    overview: string;
}

export default function MovieForm({movieId}: MovieFormProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const queryParams = {
        query: searchParams.get('query') || '',
        sortBy: searchParams.get('sortBy') || '',
        genre: searchParams.get('genre') || ''
    };
    const resultString = formQueryParamString(queryParams);
    const [movieData, setData] = useState({
        id: '',
        title: '',
        poster_path: '',
        release_date: '',
        genres: [''],
        vote_average: '',
        runtime: '',
        overview: ''
    });

    const [formIsReady, setFormRediness] = useState(false);

    const { register, handleSubmit, reset } = useForm<MovieFormData>();

    useEffect(() => {
        if(process.env.NODE_ENV !== 'test') {
            if(movieId) {
                const fetchMovieData = async () => {
                    const movieInfo = await fetchMovie(movieId);
                    if(movieInfo) {
                        setData({...movieInfo});
                        setFormRediness(true);
                    } else {
                        setData({...movieData });
                    }
                }
                fetchMovieData();
            } else {
                setFormRediness(true);
            }
        }
    }, []);

    const onSubmit: SubmitHandler<MovieFormData> = data => {
        const delimiter = resultString.length ? '&' : '?';
        if(movieId) {
            data.id = movieId;
            const editMoviefromForm = async ()=> {
                const result = await editMovie(data);
                if(result) {
                    router.push(`/${result.id}/${resultString}${delimiter}shouldUpdateList=true`);
                } else {
                    alert('Something went wrong!');
                }
            }
            editMoviefromForm();
        } else {
            const addMoviefromForm = async ()=> {
                const result = await addMovie(data);
                if(result) {
                    router.push(`/${result.id}/${resultString}${delimiter}shouldUpdateList=true`);
                } else {
                    alert('Something went wrong!');
                }
            }
            addMoviefromForm();
        }
    }

    const onReset = () => {
        reset();
    }
    return ( formIsReady ?
        <form className={styles.movieForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.column_2_3}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title"
                    defaultValue={movieData.title}
                    {...register("title", {required: true, maxLength: 100})}/>

                <label htmlFor="movie_url">Movie URL:</label>
                <input type="text" id="movie_url"
                    defaultValue={movieData.poster_path}
                    {...register("poster_path", {required: true})}/>

                <label>Genre:</label>
                <input type="text" id="genres"
                    defaultValue={movieData.genres ? movieData.genres.join(', ') : ''}
                    {...register("genres", {required: true})}/>
            </div>
            <div className={styles.column_1_3}>
                <label htmlFor="release_date">Release Date:</label>
                <input type="date" id="release_date"
                    defaultValue={movieData.release_date}
                    {...register("release_date", {required: true})}/>
                <label htmlFor="voteAverage">Rating:</label>
                <input type="text" id="vote_average"
                    defaultValue={movieData.vote_average}
                    {...register("vote_average", {required: true})}/>

                <label htmlFor="runtime">Runtime:</label>
                <input type="text" id="runtime"
                    defaultValue={movieData.runtime}
                    {...register("runtime", {required: true})}/>
            </div>

            <div className={styles.full_width}>
                <label htmlFor="overview">Overview:</label>
                <textarea id="overview" rows={4}
                    defaultValue={movieData.overview}
                    {...register("overview", {required: true})}></textarea>
            </div>
            <div className={styles.buttonBlock}>
                <button className={styles.resetButton} type="button" onClick={onReset}>RESET</button>
                <button className={styles.submitButton} type="submit">SUBMIT</button>
            </div>
        </form> : null
    );
}
