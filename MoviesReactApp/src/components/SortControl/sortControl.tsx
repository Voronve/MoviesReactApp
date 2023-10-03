import './sortControl.css';

export enum sortValue {
    default = "default",
    title = "title",
    date = "release_date"
}

interface sortControlProps {
    /** active sorting value */
    activeSorting: sortValue,
    /** callback function to be called after sort option been clicked*/
    sortBy: (sortValue: sortValue) => void
}

/** Element for sorting movies by title or date*/
export function SortControl({ activeSorting, sortBy }: sortControlProps) {

    return (
        <div className="sortBywrapper">
            <nav>
                <div className="sortByText">SORT BY</div>
                <ul className="dropdown-menu">
                    <li className={activeSorting === sortValue.title ? 'active' : ''} onClick={() => sortBy(sortValue.title)} >TITLE</li>
                    <li className={activeSorting === sortValue.date ? 'active' : ''} onClick={() => sortBy(sortValue.date)} >RELEASE DATE</li>
                </ul>
                <div className="arrowDown">▼</div>
            </nav>
        </div>);
}