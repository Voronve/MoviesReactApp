import { MovieForm } from './movieForm';
import { fireEvent, render, screen } from '@testing-library/react';

describe("Testing MovieForm component", () => {
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
        const { asFragment } = render(<MovieForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("Testing that filling movie form value with default data is working", () => {
        render(<MovieForm movieInfo={movieDataMock} />);

        const input = screen.getByDisplayValue("COMEDY, HORROR");

        expect(input).toBeInTheDocument();
    });
});