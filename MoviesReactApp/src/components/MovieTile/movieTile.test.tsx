import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieTile } from './movieTile';
import { render } from '@testing-library/react';

describe("Testing MovieTile component", () => {
    const movieDataMock = {
        id: '123',
        poster_path: "Comedy/Barbie.jpg",
        title: "Barbie",
        release_date: '2023-05-18',
        genres: ["COMEDY", "HORROR"],
    }

    test("Testing movie tile rendering", () => {

        const { asFragment } = render(
        (<BrowserRouter>
            <Routes>
                <Route path='/' element={<MovieTile movieData={movieDataMock} />}/>
            </Routes>
        </BrowserRouter>));

        expect(asFragment()).toMatchSnapshot();
    });
});