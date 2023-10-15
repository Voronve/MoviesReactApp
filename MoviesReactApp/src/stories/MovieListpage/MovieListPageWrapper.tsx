import { MovieListPage } from '../../components/MovieListPage/movieListPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function MovieListWrapper() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<MovieListPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}