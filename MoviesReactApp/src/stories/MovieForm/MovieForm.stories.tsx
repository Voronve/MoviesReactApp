import type { Meta, StoryObj } from '@storybook/react';
import { MovieForm } from '../../components/MovieForm/movieForm';

const meta = {
    title: 'New components/MovieForm',
    component: MovieForm,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof MovieForm>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
  export const Initial: Story = {};