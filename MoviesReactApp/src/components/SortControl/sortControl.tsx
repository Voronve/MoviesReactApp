import { useState } from "react";
import './sortControl.css';

export enum sortValue {
    default = "default",
    title = "title",
    date = "date"
}

interface sortControlProps {
    /** callback function to be called after sort option been clicked*/
    sortBy: (sortValue: sortValue) => void
}

/** Element for sorting movies by title or date*/
export function SortControl({ sortBy }: sortControlProps) {
    const [state, setState] = useState({activeTitleClass: "active", activeDateClass: ""});

    const handleClick = (value: sortValue) => {
        if(value == sortValue.title) {
            setState({...state, activeTitleClass: "active", activeDateClass: ""});
            sortBy(sortValue.title)
        } else {
            setState({...state, activeTitleClass: "", activeDateClass: "active"});
            sortBy(sortValue.date)
        }
      };

    return (
        <div className="sortBywrapper">
            <nav>
                <div className="sortByText">SORT BY</div>
                <ul className="dropdown-menu">
                    <li className={state.activeTitleClass} onClick={() => handleClick(sortValue.title)} >TITLE</li>
                    <li className={state.activeDateClass} onClick={() => handleClick(sortValue.date)} >RELEASE DATE</li>
                </ul>
                <div className="arrowDown">▼</div>
            </nav>
        </div>);
}