import { MovieTile, movieTileProps } from '../MovieTile/movieTile';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function MovieTileWrapper({ movieData }: movieTileProps) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<MovieTile movieData={movieData}/>}/>
            </Routes>
        </BrowserRouter>
    );
}