import type { Meta, StoryObj } from '@storybook/react';
import { SortControl, sortValue } from '../../components/SortControl/sortControl';

const meta = {
    title: 'New components/SortControl',
    component: SortControl,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof SortControl>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Initial: Story = {
    args: {
        activeSorting: sortValue.default,
        sortBy: (value: string) => alert(`This is testing call from callback ${value}`)
    },
  };