import { SearchForm } from './searchForm';
import { fireEvent, render, screen } from '@testing-library/react';

describe("Testing SearchForm component", () => {
    const input = 'Initial input';
    const onSearch = jest.fn();
    const customInput = "Horror";

    beforeEach(() => {
        render(<SearchForm/>);
    });

    test("Testing SearchForm input initial value", () => {

        fireEvent.click(screen.getByText('Search'));

        expect(onSearch).toBeCalledWith('Initial input');
    });

    test("Testing SearchForm input custom value after pressing \"Search\" button", () => {

        fireEvent.change(screen.getByRole("textbox"), {
            target: { value: customInput },
        });

        fireEvent.click(screen.getByText('Search'));

        expect(onSearch).toBeCalledWith(customInput);
    });

    test("Testing SearchForm input custom value after pressing Enter", () => {

        const textbox = screen.getByRole("textbox");

        fireEvent.change(textbox, {
            target: { value: customInput },
        });

        fireEvent.keyDown(textbox, {key: 'Enter', code: 'Enter', charCode: 13});

        expect(onSearch).toBeCalledWith(customInput);
    });
});