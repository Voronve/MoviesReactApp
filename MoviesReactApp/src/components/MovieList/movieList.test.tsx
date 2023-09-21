import { MovieList } from './movieList';
import { fireEvent, render, screen } from '@testing-library/react';

describe("Testing MovieList component", () => {
    const onClick = jest.fn();
    const movieListMock = [{
        "image": "Comedy/Barbie.jpg",
        "title": "Barbie",
        "releaseYear": 2023,
        "genres": ["COMEDY"],
        "rating": 8.9,
        "duration": "2h 34min",
        "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    {
        "image": "Comedy/GrandBudapest.jpg",
        "title": "GrandBudapest",
        "releaseYear": 2014,
        "genres": ["COMEDY"],
        "rating": 8.9,
        "duration": "2h 34min",
        "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    }];

    test("Testing movie list rendering", () => {

        const { asFragment } = render(<MovieList list={movieListMock} movieClick={onClick} />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("Testing that callback function is working as expected", () => {
        render(<MovieList list={movieListMock} movieClick={onClick} />);
        const chosenMovie = movieListMock[1];

        fireEvent.click(screen.getByText(chosenMovie.title));

        expect(onClick).toBeCalledWith(chosenMovie.title);
    });
});