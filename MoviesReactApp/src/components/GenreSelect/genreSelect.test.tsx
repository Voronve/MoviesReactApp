import { GenreSelect } from './genreSelect';
import { fireEvent, render, screen } from '@testing-library/react';
import config from '../../config.json';

describe("Testing GanreSelect component", () => {
    const genreNameList = config.janres;
    const onSelect = jest.fn();
    const selectedGenre = "Drama";

    beforeEach(() => {
        render(<GenreSelect selectedGenre = {selectedGenre} onSelect = {onSelect} />);
    });

    test("Testing genres rendering ", () => {

        const janres = screen.getAllByRole("listitem").map(janre => janre.textContent);

        expect(janres).toEqual(genreNameList.map( janre => janre.toUpperCase()));
    });

    test("Testing that component highlights a selected genre", () => {

        const janre = screen.getAllByRole("listitem").find(janre => janre.className === 'selected');

        expect(janre?.textContent).toEqual(selectedGenre.toUpperCase());
    });

    test("Testing that onSelect function is working as expected", () => {

         const chosenJanre = genreNameList[1];

        fireEvent.click(screen.getByText(chosenJanre.toUpperCase()));

        expect(onSelect).toBeCalledWith(chosenJanre);
    });
});