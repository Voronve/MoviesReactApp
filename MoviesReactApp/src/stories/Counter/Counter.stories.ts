import type { Meta, StoryObj } from '@storybook/react';
import { Counter } from '../../components/Counter/counter';

const meta = {
    title: 'Old components/Counter',
    component: Counter,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      initialValue: { control: 'number' },
    },
  } satisfies Meta<typeof Counter>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
  export const Initial: Story = {
    args: {
      initialValue: 5
    },
  };