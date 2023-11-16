import type { Meta, StoryObj } from '@storybook/react';
import MovieFormWrapper from '../../components/browserWrappers/MovieFormWrapper';

const meta = {
    title: 'New components/MovieForm',
    component: MovieFormWrapper,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof MovieFormWrapper>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
  export const Initial: Story = {};