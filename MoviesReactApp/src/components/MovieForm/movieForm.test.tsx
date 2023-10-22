import MovieFormWrapper from '../browserWrappers/MovieFormWrapper';
import { render } from '@testing-library/react';

describe("Testing MovieForm component", () => {

    test("Testing movie form rendering", () => {
        const { asFragment } = render(<MovieFormWrapper />);

        expect(asFragment()).toMatchSnapshot();
    });
});