import React, { useContext } from "react";
import style from './SortControl.module.css';
import HomePageContext from '../HomePage/HomePageContext';

export enum sortValue {
    default = "default",
    title = "title",
    date = "release_date"
}

/** Element for sorting movies by title or date*/
export function SortControl(/*{ activeSorting, sortBy }: sortControlProps*/) {
    const { sortBy: activeSorting, handleSortCriterionChange: sortBy } = useContext(HomePageContext);

    return (
        <div className={style.sortBywrapper}>
            <nav>
                <div className={style.sortByText}>SORT BY</div>
                <ul className={style.dropdownMenu}>
                    <li className={activeSorting === sortValue.title ? style.active : ''} onClick={() => sortBy(sortValue.title)} >TITLE</li>
                    <li className={activeSorting === sortValue.date ? style.active : ''} onClick={() => sortBy(sortValue.date)} >RELEASE DATE</li>
                </ul>
                <div className={style.arrowDown}>▼</div>
            </nav>
        </div>);
}