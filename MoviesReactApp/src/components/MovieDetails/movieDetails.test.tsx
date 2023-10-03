import { MovieDetails } from './movieDetails';
import { render } from '@testing-library/react';

describe("Testing MovieDetails component", () => {

    test("Testing movie details rendering", () => {

        const movieInfo = {
            poster_path: 'testImage',
            title:'testImage',
            release_date: 1987,
            genres: ["DRAMA", "BIOPIC"],
            vote_average: 9.9,
            runtime: 'infinity',
            overview: 'lorem ipsum'
        }

        const { asFragment } = render(<MovieDetails movieData = {movieInfo}/>);

        expect(asFragment()).toMatchSnapshot();
    });
});