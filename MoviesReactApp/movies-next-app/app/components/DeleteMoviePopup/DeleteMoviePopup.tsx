import { useForm } from 'react-hook-form';
import { deleteMovie } from '@/utils/axios';
import { useRouter, useSearchParams } from 'next/navigation';
import formQueryParamString from '@/helpers/formQueryParamsString';
import styles from '../MovieForm/Movieform.module.css';

/** Form for deleting movies */
export function DeleteMoviePopup({ movieId }: { movieId: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const queryParams = {
        query: searchParams.get('query') || '',
        sortBy: searchParams.get('sortBy') || '',
        genre: searchParams.get('genre') || ''
    };

    const resultString = formQueryParamString(queryParams);
    const { handleSubmit } = useForm();

    const onSubmit = () => {
        if(movieId) {
            const delimiter = resultString.length ? '&' : '?';

            const deleteMovieFromForm = async ()=> {
                const success = await deleteMovie(movieId);
                if(success) {
                    router.push(`/${resultString}${delimiter}shouldUpdateList=true`);
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
        <form className={styles.movieForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.confirmMessage}>Are you sure you want to delete this movie?</div>
            <div className={styles.buttonBlock}>
                <button className={styles.submitButton} type='submit'>CONFIRM</button>
            </div>
        </form>);
}