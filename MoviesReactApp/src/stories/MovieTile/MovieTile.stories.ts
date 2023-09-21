import type { Meta, StoryObj } from '@storybook/react';
import { MovieTile } from '../../components/MovieTile/movieTile';
import { genres } from '../../components/MovieListStateHandler/movieListStateHandler';
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
            image: "Crime/ManOnFire.jpg",
            title: "ManOnFire",
            releaseYear: 2004,
            genres: [genres.crime],
            onClick: (value: string) => alert(`This is testing call from callback ${value}`)
        }
    }
  };