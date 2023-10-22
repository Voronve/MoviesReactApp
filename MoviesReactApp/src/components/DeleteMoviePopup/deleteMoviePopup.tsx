import { useForm } from 'react-hook-form';
import formQueryParamString from '../../helpers/formQueryParamsString';
import { deleteMovie } from '../../utils/axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

/** Form for deleting movies */
export function DeleteMoviePopup() {
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [searchParams] = useSearchParams();
    const resultString = formQueryParamString(searchParams);
    const { register, handleSubmit } = useForm();

    const onSubmit = () => {
        if(movieId) {
            const delimiter = resultString.length ? '&' : '?';

            const deleteMovieFromForm = async ()=> {
                const success = await deleteMovie(movieId);
                if(success) {
                    navigate(`/${resultString}${delimiter}shouldUpdateList=true`);
                } else {
                    alert('Something went wrong!');
                }
            }
            deleteMovieFromForm();
        } else {
            alert('Wrong data passing!');
        }
    }

    return (
        <form className="movieForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="confirmMessage">Are you sure you want to delete this movie?</div>
            <div className="buttonBlock">
                <button className="submitButton" type='submit'>CONFIRM</button>
            </div>
        </form>);
}