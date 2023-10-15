import { useEffect, useState } from 'react';
import { fetchMovie } from '../../utils/axios';
import { MovieDetails } from '../MovieDetails/movieDetails';
import { useParams } from 'react-router-dom';

export function MovieDetailsGetter() {
    const { movieId } = useParams();
    const [data, setData] = useState({
        id: '',
        title: 'Such movie is absent',
        poster_path: '',
        release_date: 0,
        genres: [''],
        vote_average: 0,
        runtime: '',
        overview: ''
    });

    useEffect(() => {
        if(process.env.NODE_ENV !== 'test') {

            const fetchMovieData = async ()=> {
                const result = await fetchMovie(movieId);
                if(result) {
                    setData(result);
                } else {
                    setData({...data, title: 'Such movie is absent'});
                }
            }
            fetchMovieData();
        }
    },[]);

    return <MovieDetails movieData={data}/>
}