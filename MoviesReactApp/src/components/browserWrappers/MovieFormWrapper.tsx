import { MovieForm } from '../MovieForm/movieForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function MovieFormWrapper() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<MovieForm/>}/>
            </Routes>
        </BrowserRouter>
    );
}