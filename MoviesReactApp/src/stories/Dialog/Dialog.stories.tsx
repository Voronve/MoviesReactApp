import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../../components/Dialog/dialog';
import { Counter } from '../../components/Counter/counter';
import { MovieForm } from '../../components/MovieForm/movieForm';
const onClick = () => alert('This is testing call from onClick');
const onSubmit = () => alert('This is testing call from onSubmit');
const mockMovieData = {
  "poster_path": "Comedy/examplePicture.jpg",
  "title": "Test title",
  "release_date": 2014,
  "genres": ["COMEDY", "HORROR"],
  "vote_average": 8.9,
  "runtime": "2h 34min",
  "overview": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
};


const meta = {
    title: 'New components/Dialog',
    component: Dialog,
    parameters: {
      layout: 'centered',
    }
  } satisfies Meta<typeof Dialog>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const AddMovieFormStory: Story = {
    args: {
        title: <h3>Add movie</h3>,
        children: <MovieForm onSubmit={onSubmit}></MovieForm>,
        closeFunc: onClick
    },
  };

  export const EditMovieFormStory: Story = {
    args: {
        title: <h3>Edit movie</h3>,
        children: <MovieForm onSubmit={onSubmit} movieInfo={mockMovieData}></MovieForm>,
        closeFunc: onClick
    },
  };

  export const DeleteMovieFormStory: Story = {
    args: {
        title: <h3>Delete movie</h3>,
        children: (
        <form className="movieForm">
          <div className="confirmMessage">Are you sure you want to delete this movie?</div>
          <div className="buttonBlock">
              <button className="submitButton" type='submit' onSubmit={onSubmit}>CONFIRM</button>
          </div>
      </form>),
        closeFunc: onClick
    },
  };