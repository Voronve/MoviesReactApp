import { MovieListPage } from './movieListPage';
import { render } from '@testing-library/react';
describe("Testing MovieList page component", () => {

    test("Testing movie list page rendering ", () => {
        const { asFragment } = render(<MovieListPage/>);

        expect(asFragment()).toMatchSnapshot();
    });
});