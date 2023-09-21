import type { Meta, StoryObj } from '@storybook/react';
import { MovieListStateHandler } from '../../components/MovieListStateHandler/movieListStateHandler';

const meta = {
    title: 'New components/MovieListHandlers',
    component: MovieListStateHandler,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof MovieListStateHandler>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Initial: Story = {
    args: {
        moviesList: [{
            image: "Crime/ManOnFire.jpg",
            title: "ManOnFire",
            releaseYear: 2004,
            genres: ["CRIME"],
            rating: 8.9,
            duration: "2h 34min",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        },
        {
            "image": "Comedy/Barbie.jpg",
            "title": "Barbie",
            "releaseYear": 2004,
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
        }],
        janres: ["ALL", "CRIME", "COMEDY"]
    }
  };