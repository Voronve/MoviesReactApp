import { MovieTile } from './movieTile';
import { genres } from '../MovieListStateHandler/movieListStateHandler';
import { fireEvent, render, screen } from '@testing-library/react';

describe("Testing MovieTile component", () => {
    const onClick = jest.fn();
    const movieDataMock = {
        image: "Comedy/Barbie.jpg",
        title: "Barbie",
        releaseYear: 2023,
        genres: ["COMEDY", "HORROR"] as genres[],
        onClick
    }

    test("Testing movie tile rendering", () => {

        const { asFragment } = render(<MovieTile movieData={movieDataMock} />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("Testing that callback function is working as expected", () => {
        render(<MovieTile movieData={movieDataMock} />)

        fireEvent.click(screen.getByText(movieDataMock.title));

        expect(onClick).toBeCalledWith(movieDataMock.title);
    });
});