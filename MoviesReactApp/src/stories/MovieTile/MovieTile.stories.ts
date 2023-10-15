import type { Meta, StoryObj } from '@storybook/react';
import MovieTileWrapper from './MovieTileWrapper';

const meta = {
    title: 'New components/MovieTile',
    component: MovieTileWrapper,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof MovieTileWrapper>;

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