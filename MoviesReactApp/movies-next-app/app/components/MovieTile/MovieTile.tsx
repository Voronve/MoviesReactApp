"use client"
import style from './MovieTile.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import formQueryParamString from '../../../helpers/formQueryParamsString';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

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
    const searchParams = useSearchParams();
    const queryParams = {
        query: searchParams.get('query') || '',
        sortBy: searchParams.get('sortBy') || '',
        genre: searchParams.get('genre') || ''
    };
    const resultString = formQueryParamString(queryParams);
    const router = useRouter();

    const handleEdit = () => {
        setActiveToggle('');
        router.push(`/${id}/edit/${resultString}`);
    }

    const handleDelete = () => {
        setActiveToggle('');
        router.push(`/${id}/delete/${resultString}`);
    }

    return (
        <div className={style.movieTile}>
            <Link href={`/${id}${resultString}`}>
                <img src={poster_path} alt={title} width="322px"/>
                <div className={style.movieInfo}>
                    <div className={style.flexContainer}>
                        <div className={style.name}>{title}</div>
                        <div className={style.year}>{`${release_date}`.split('-')[0]}</div>
                    </div>
                    <div className={style.ganres}>{genres.join()}</div>
                </div>
            </Link>
            <div className={style.editMenuWrapper}>
                <div className={style.gearIcon} onClick={() => setActiveToggle('active')}><FontAwesomeIcon icon={faGear}/></div>
                <ul className={`${style.editMovieMenu} ${activeToggle ? style.active : ''}`}>
                    <li className={style.close} onClick={() => setActiveToggle('')}>X</li>
                    <li onClick={() => handleEdit()}>Edit</li>
                    <li onClick={() => handleDelete()}>Delete</li>
                </ul>
            </div>
        </div>
    );
}