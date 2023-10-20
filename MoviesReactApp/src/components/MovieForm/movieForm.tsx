import React, { useEffect, useState } from 'react';
import formQueryParamString from '../../helpers/formQueryParamsString';
import { fetchMovie, addMovie } from '../../utils/axios';
import { MovieInfo } from '../MovieListPage/movieListPage';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import './movieForm.css';

export interface MovieFormProps {
    movieInfo?: MovieInfo,
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
    vote_average: number;
    /**Movie length */
    runtime: string;
    /**Movie overview */
    overview: string;
}

/** Form for searching movies */
export function MovieForm({ movieInfo }: MovieFormProps) {
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [searchParams] = useSearchParams();
    const resultString = formQueryParamString(searchParams);
    const [movieData, setData] = useState({
        id: '',
        title: '',
        poster_path: '',
        release_date: 0,
        genres: [''],
        vote_average: 0,
        runtime: '',
        overview: ''
    });

    const { register, handleSubmit } = useForm<MovieFormData>()

    useEffect(() => {
        if(process.env.NODE_ENV !== 'test') {

            const fetchMovieData = async ()=> {
                const result = await fetchMovie(movieId);
                if(result) {
                    setData(result);
                } else {
                    setData({...movieData });
                }
            }
            fetchMovieData();
        }
    },[]);

    const onSubmit: SubmitHandler<MovieFormData> = data => {
        const addMoviefromForm = async ()=> {
            console.log(data);
            const result = await addMovie(data);
            if(result) {
                navigate(`/${result.id}/${resultString}`);
            } else {
                alert('Something went wrong!');
            }
        }
        addMoviefromForm();

    }

    const onReset = (event: React.MouseEvent) => {
        event.preventDefault();
        setData({...movieData });
    }

    return (
         <form className='movieForm'  onSubmit={handleSubmit(onSubmit)}>
            <div className="column-2-3">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title"
                    defaultValue={movieData.title}
                    {...register("title", {required: true, maxLength: 100})}/>

                <label htmlFor="movie-url">Movie URL:</label>
                <input type="text" id="movie-url"
                    defaultValue={movieData.poster_path}
                    {...register("poster_path", {required: true})}/>

                <label>Genre:</label>
                <input type="text" id="janres"
                    defaultValue={movieData.genres ? movieData.genres.join(', ') : ''}
                    {...register("genres", {required: true})}/>
            </div>

            <div className="column-1-3">
                <label htmlFor="release-date">Release Date:</label>
                <input type="date" id="release-date"
                    defaultValue={movieData.release_date ?? ''}
                    {...register("release_date", {required: true})}/>

                <label htmlFor="vote_average">Rating:</label>
                <input type="text" id="vote_average"
                    defaultValue={movieData.vote_average ?? ''}
                    {...register("vote_average", {required: true})}/>

                <label htmlFor="runtime">Runtime:</label>
                <input type="text" id="runtime"
                    defaultValue={movieData.runtime}
                    {...register("runtime", {required: true})}/>
            </div>

            <div className="full-width">
                <label htmlFor="overview">Overview:</label>
                <textarea id="overview" rows={4}
                    defaultValue={movieData.overview}
                    {...register("overview", {required: true})}></textarea>
            </div>
            <div className="buttonBlock">
                <button className="resetButton" onClick={onReset} >RESET</button>
                <button className="submitButton" type='submit'>SUBMIT</button>
            </div>
        </form>
    );
}