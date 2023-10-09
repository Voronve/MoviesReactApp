import './movieTile.css';

interface movieTileProps {
    /** Movie tile data object*/
    movieData: {
        /** Image url*/
        poster_path: string,
        /**Movie title */
        title: string,
        /**Movie release year */
        release_date: number,
        /**Movie janres list */
        genres: string[],
        /** callback function for movie tile been clicked*/
        onClick: (movie: string) => void
    }
}

/** Single movie tile*/
export function MovieTile({ movieData }: movieTileProps ) {
    const {poster_path, title, release_date, genres, onClick} = movieData;

    return (
        <div
        className="movieTile"
        onClick={() => onClick(title)}>
            <img src={poster_path} alt={title} width="322px"/>
            <div className="movieInfo">
                <div className="flex-container">
                    <div className="name">{title}</div>
                    <div className="year">{`${release_date}`.split('-')[0]}</div>
                </div>
                <div className="ganres">{genres.join()}</div>
            </div>
        </div>
    );
}