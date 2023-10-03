import type { Meta, StoryObj } from '@storybook/react';
import { GenreSelect } from '../../components/GenreSelect/genreSelect';

const onSelect = (value: string) => alert(`This is testing call from callback ${value}`);

const meta = {
    title: 'Old components/GenreSelect',
    component: GenreSelect,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof GenreSelect>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const FirstSelected: Story = {
    args: {
        selectedGenre: 'All',
        onSelect
    },
  };

  export const SecondSelected: Story = {
    args: {
        selectedGenre: 'Drama',
        onSelect
    },
  };