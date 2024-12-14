
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, reading_time }) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 mt-2">
            <div>
                <h3 className="text-4xl">Bookmarked blogs:{reading_time} </h3>
            </div>
            <h3 className="text-center text-3xl">Bookmarks: {bookmarks.length}</h3>
            {bookmarks.map((bookmark, idx) => (
                <Bookmark key= {idx} bookmark={bookmark} />
            ))}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    reading_time: PropTypes.number // Ensure 'bookmarks' is required and an array
}

export default Bookmarks; 