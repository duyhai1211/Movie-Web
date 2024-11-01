import PropTypes from "prop-types";

const MovieList = ({ title }) => {
    return <div className="text-white p-10 mb-10">{title}</div>;
};

MovieList.propTypes = {
    title: PropTypes.string,
};

export default MovieList;
