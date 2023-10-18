import {SortControl, sortValue} from './sortControl';
import { fireEvent, render, screen } from '@testing-library/react';

describe("Testing SortControl component", () => {
    const sortBy = jest.fn();

    test("Testing SortControl rendering", () => {

        const { asFragment } = render(<SortControl activeSorting={sortValue.default} sortBy={sortBy}/>);

        expect(asFragment()).toMatchSnapshot();
    });

    test("Testing that callback function is working as expected", () => {
        render(<SortControl activeSorting={sortValue.default} sortBy={sortBy}/>);

        fireEvent.click(screen.getByText("RELEASE DATE"));
        expect(sortBy).toBeCalledWith(sortValue.date);
        fireEvent.click(screen.getByText("TITLE"));
        expect(sortBy).toBeCalledWith(sortValue.title);
    });
});