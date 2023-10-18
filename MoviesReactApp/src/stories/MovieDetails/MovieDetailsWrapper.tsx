import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetails, MovieDetailsProps } from '../../components/MovieDetails/movieDetails';

export default function SearchFormWrapper({ movieData }: MovieDetailsProps) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<MovieDetails movieData={movieData}/>}/>
            </Routes>
        </BrowserRouter>
    );
}