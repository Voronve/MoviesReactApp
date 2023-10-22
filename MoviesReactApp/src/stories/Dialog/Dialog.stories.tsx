import type { Meta, StoryObj } from '@storybook/react';
import { DeleteMoviePopup } from '../../components/DeleteMoviePopup/deleteMoviePopup';
import { MovieForm } from '../../components/MovieForm/movieForm';
import DialogWrapper from '../../components/browserWrappers/DialogWrapper';

const meta = {
    title: 'New components/Dialog',
    component: DialogWrapper,
    parameters: {
      layout: 'centered',
    }
  } satisfies Meta<typeof DialogWrapper>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const AddMovieFormStory: Story = {
    args: {
        title: <h3>Add movie</h3>,
        children: <MovieForm></MovieForm>,
    },
  };

  export const EditMovieFormStory: Story = {
    args: {
        title: <h3>Edit movie</h3>,
        children: <MovieForm></MovieForm>,
    },
  };

  export const DeleteMovieFormStory: Story = {
    args: {
        title: <h3>Delete movie</h3>,
        children: <DeleteMoviePopup></DeleteMoviePopup>
    },
  };