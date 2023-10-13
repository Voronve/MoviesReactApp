import type { Meta, StoryObj } from '@storybook/react';
import { MovieTile } from '../../components/MovieTile/movieTile';

const meta = {
    title: 'New components/MovieTile',
    component: MovieTile,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof MovieTile>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Initial: Story = {
    args: {
        movieData: {
          id: "123",
          poster_path: "/media/Crime/ManOnFire.jpg",
          title: "ManOnFire",
          release_date: 2004,
          genres: ["Fantasy"],
        }
    }
  };