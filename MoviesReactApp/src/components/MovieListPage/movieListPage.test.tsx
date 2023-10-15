import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieListPage } from './movieListPage';
import { render } from '@testing-library/react';

describe("Testing MovieList page component", () => {

    test("Testing movie list page rendering ", () => {

        const { asFragment } = render(
        (<BrowserRouter>
            <Routes>
                <Route path='/' element={<MovieListPage/>}/>
            </Routes>
        </BrowserRouter>));

        expect(asFragment()).toMatchSnapshot();
    });
});