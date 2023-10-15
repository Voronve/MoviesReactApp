import { ReactRenderer, type Meta, type StoryObj } from '@storybook/react';
import SearchFormWrapper from './SearchFormWrapper';

const meta = {
    title: 'Old components/SearchForm',
    component: SearchFormWrapper,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof SearchFormWrapper>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Initial: Story = {};