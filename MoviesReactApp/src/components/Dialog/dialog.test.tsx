import { render, screen } from '@testing-library/react';
import DialogWrapper from '../browserWrappers/DialogWrapper';

describe("Testing Dialog component", () => {
    const testTitle = <h2>Test title</h2>;
    const testChild = <div>Test child</div>;

    test("Testing dialog window rendering ", () => {

        const { asFragment } = render(<DialogWrapper title={testTitle}>{testChild}</DialogWrapper>);

        expect(asFragment()).toMatchSnapshot();
    });

    test("Testing that dialog child props exists", () => {

        render(<DialogWrapper title={testTitle}>{testChild}</DialogWrapper>);

        const title = screen.getByText("Test title");
        const child = screen.getByText("Test child");

        expect(title).toBeInTheDocument();
        expect(child).toBeInTheDocument();
    });
});