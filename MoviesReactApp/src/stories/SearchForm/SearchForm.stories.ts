import type { Meta, StoryObj } from '@storybook/react';
import { SearchForm } from '../../components/SearchForm/searchForm';

const onSearch = (value: string) => alert(`This is testing call from callback ${value}`);

const meta = {
    title: 'Old components/SearchForm',
    component: SearchForm,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof SearchForm>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Initial: Story = {
    args: {
      input: 'Test input',
      onSearch: onSearch
    },
  };