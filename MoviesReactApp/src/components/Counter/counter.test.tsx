import Counter from './counter';
import { fireEvent, render, screen } from '@testing-library/react';

describe("Testing Counter component", () => {

    test("Testing Counter snapshot", () => {
        const { asFragment } = render(<Counter initialValue={0}/>);

        expect(asFragment()).toMatchSnapshot();
    });

    test("Testing Counter initial value", () => {
        const initialValue = 554;

        render(<Counter initialValue={initialValue}/>);

        expect(screen.getByText('554')).toBeInTheDocument();
    });

    test("Testing Counter value after increment", () => {
        const initialValue = 0;

        render(<Counter initialValue={initialValue}/>);

        fireEvent.click(screen.getByText("Push to add one"));
        expect(screen.queryByText('0')).toBeNull();
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    test("Testing Counter value after decrement (shouldn't be lower then zero)", () => {
        const initialValue = 1;

        render(<Counter initialValue={initialValue}/>);
        const decrementButton = screen.getByText("Push to substract one");
        fireEvent.click(decrementButton);
        fireEvent.click(decrementButton);
        expect(screen.getByText('0')).toBeInTheDocument();
    });
});