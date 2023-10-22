import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchForm } from './searchForm';
import { render } from '@testing-library/react';

describe("Testing SearchForm component", () => {

    test("Testing SearchForm rendering ", () => {

        const { asFragment } = render(
        (<BrowserRouter>
            <Routes>
                <Route path='/' element={<SearchForm/>}/>
            </Routes>
        </BrowserRouter>));

        expect(asFragment()).toMatchSnapshot();
    });
});