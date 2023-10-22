import './movieTile.css';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import formQueryParamString from '../../helpers/formQueryParamsString';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export interface movieTileProps {
    /** Movie tile data object*/
    movieData: {
        /**Movie id */
        id: string,
        /** Image url*/
        poster_path: string,
        /**Movie title */
        title: string,
        /**Movie release year */
        release_date: string,
        /**Movie janres list */
        genres: string[]
    }
}

/** Single movie tile*/
export function MovieTile({ movieData }: movieTileProps ) {
    const [activeToggle, setActiveToggle] = useState('');
    const {id, poster_path, title, release_date, genres} = movieData;
    const [searchParams] = useSearchParams();
    const resultString = formQueryParamString(searchParams);

    const navigate = useNavigate();

    const handleEdit = () => {
        setActiveToggle('');
        navigate(`/${id}/edit/${resultString}`);
    }

    const handleDelete = () => {
        setActiveToggle('');
        navigate(`/${id}/delete/${resultString}`);
    }

    return (
        <div className="movieTile">
            <Link to={`/${id}${resultString}`}>
                <img src={poster_path} alt={title} width="322px"/>
                <div className="movieInfo">
                    <div className="flex-container">
                        <div className="name">{title}</div>
                        <div className="year">{`${release_date}`.split('-')[0]}</div>
                    </div>
                    <div className="ganres">{genres.join()}</div>
                </div>
            </Link>
            <div className="editMenuWrapper">
                <div className='gearIcon' onClick={() => setActiveToggle('active')}><FontAwesomeIcon icon={faGear}/></div>
                <ul className={`editMovieMenu ${activeToggle}`}>
                    <li className='close' onClick={() => setActiveToggle('')}>X</li>
                    <li onClick={() => handleEdit()}>Edit</li>
                    <li onClick={() => handleDelete()}>Delete</li>
                </ul>
            </div>
        </div>
    );
}