import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div>
            <div>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>  
                </h2>
                <img src={coverImg} />
                <p>{summary.length > 233 ? `${summary.slice(0,233)}...`: summary}</p>
                <ul>
                {genres.map(g => <li key={g}>{g}</li>)}
                </ul>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Movie;