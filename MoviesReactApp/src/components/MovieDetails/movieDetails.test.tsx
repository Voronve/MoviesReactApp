import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieDetails } from './movieDetails';
import { render } from '@testing-library/react';

describe("Testing MovieDetails component", () => {

    test("Testing movie details rendering", () => {

        const movieInfo = {
            id: "123",
            poster_path: 'testImage',
            title:'testImage',
            release_date: 1987,
            genres: ["DRAMA", "BIOPIC"],
            vote_average: 9.9,
            runtime: 'infinity',
            overview: 'lorem ipsum'
        }
        const { asFragment } = render((
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MovieDetails movieData = {movieInfo}/>}/>
            </Routes>
        </BrowserRouter>));

        expect(asFragment()).toMatchSnapshot();
    });
});