import { MovieList, movieListProps } from '../../components/MovieList/movieList';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function MovieListWrapper({ list }: movieListProps) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<MovieList list={list}/>}/>
            </Routes>
        </BrowserRouter>
    );
}