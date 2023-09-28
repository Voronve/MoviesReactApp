import { MovieForm } from './movieForm';
import { genres } from '../MovieListStateHandler/movieListStateHandler';
import { fireEvent, render, screen } from '@testing-library/react';

describe("Testing MovieForm component", () => {
    const onClick = jest.fn();
    const movieDataMock = {
        image: "Comedy/Barbie.jpg",
        title: "Barbie",
        releaseYear: 2023,
        genres: ["COMEDY", "HORROR"] as genres[],
        rating: 8.9,
        duration: "2h 34min",
        description: "Test description"
    }

    test("Testing movie form rendering", () => {
        const { asFragment } = render(<MovieForm onSubmit={onClick} />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("Testing that filling movie form value with default data is working", () => {
        render(<MovieForm movieInfo={movieDataMock} onSubmit={onClick} />);

        const input = screen.getByDisplayValue("COMEDY, HORROR");

        expect(input).toBeInTheDocument();
    });

    test("Testing that callback function is working as expected", () => {
        render(<MovieForm movieInfo={movieDataMock} onSubmit={onClick} />);

        fireEvent.submit(screen.getByText('SUBMIT'));

        expect(onClick).toHaveBeenCalled();
    });
});