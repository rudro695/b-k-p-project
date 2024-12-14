import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;

    return (
        <div>
            <h3 className="bg-slate-200 p-4 m-4 rounded-xl">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired, // Ensure `bookmark` is required
};

export default Bookmark;
