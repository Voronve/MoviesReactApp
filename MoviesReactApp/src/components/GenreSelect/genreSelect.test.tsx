import GanreSelect from './genreSelect';
import { fireEvent, render, screen } from '@testing-library/react';

describe("Testing GanreSelect component", () => {
    const genreNameList = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
    const onSelect = jest.fn();
    const selectedGenre = "ALL";

    beforeEach(() => {
        render(<GanreSelect genreNameList = {genreNameList} selectedGenre = {selectedGenre} onSelect = {onSelect}/>);
    });

    test("Testing genres rendering ", () => {

        const janres = screen.getAllByRole("listitem").map(janre => janre.textContent);

        expect(janres).toEqual(genreNameList);
    });

    test("Testing that component highlights a selected genre", () => {

        const janre = screen.getAllByRole("listitem").find(janre => janre.className === 'selected');

        expect(janre?.textContent).toEqual(selectedGenre);
    });

    test("Testing that onSelect function is working as expected", () => {

        const chosenJanre = genreNameList[1];

        fireEvent.click(screen.getByText(chosenJanre));

        expect(onSelect).toBeCalledWith(chosenJanre);
    });
});