import { MovieTile } from './movieTile';
import { fireEvent, render, screen } from '@testing-library/react';

describe("Testing MovieTile component", () => {
    const onClick = jest.fn();
    const movieDataMock = {
        poster_path: "Comedy/Barbie.jpg",
        title: "Barbie",
        release_date: 2023,
        genres: ["COMEDY", "HORROR"],
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