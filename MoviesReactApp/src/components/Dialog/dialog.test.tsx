import { Dialog } from './dialog';
import { fireEvent, render, screen } from '@testing-library/react';

describe("Testing Dialog component", () => {
    const testTitle = <h2>Test title</h2>;
    const onSelect = jest.fn();
    const testChild = <div>Test child</div>;

    test("Testing dialog window rendering ", () => {

        const { asFragment } = render(<Dialog title={testTitle} closeFunc={onSelect}>{testChild}</Dialog>);

        expect(asFragment()).toMatchSnapshot();
    });

    test("Testing that dialog child props exists", () => {

        render(<Dialog title={testTitle} closeFunc={onSelect}>{testChild}</Dialog>);

        const title = screen.getByText("Test title");
        const child = screen.getByText("Test child");

        expect(title).toBeInTheDocument();
        expect(child).toBeInTheDocument();
    });

    test("Testing that closeFunc function in dialog is working as expected", () => {

        render(<Dialog title={testTitle} closeFunc={onSelect}>{testChild}</Dialog>);

        fireEvent.click(screen.getByRole('button'));

        expect(onSelect).toBeCalled();
    });
});