import { MovieForm } from './movieForm';
import { fireEvent, render, screen } from '@testing-library/react';

describe("Testing MovieForm component", () => {
    const onClick = jest.fn();
    const movieDataMock = {
        id: "123",
        poster_path: "Comedy/Barbie.jpg",
        title: "Barbie",
        release_date: 2023,
        genres: ["COMEDY", "HORROR"],
        vote_average: 8.9,
        runtime: "2h 34min",
        overview: "Test overview"
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