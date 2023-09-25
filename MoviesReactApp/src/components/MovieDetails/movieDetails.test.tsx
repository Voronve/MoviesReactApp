import { MovieDetails } from './movieDetails';
import { render } from '@testing-library/react';

describe("Testing MovieDetails component", () => {

    test("Testing movie details rendering", () => {

        const movieInfo = {
            image: 'testImage',
            title:'testImage',
            releaseYear: 1987,
            genres: ["DRAMA", "BIOPIC"],
            rating: 9.9,
            duration: 'infinity',
            description: 'lorem ipsum'
        }

        const { asFragment } = render(<MovieDetails movieData = {movieInfo}/>);

        expect(asFragment()).toMatchSnapshot();
    });
});