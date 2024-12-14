import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleTooAddBookmark, handleMarkAssRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data); // Check the data structure
                setBlogs(data); // Update the state with fetched data
            })
            .catch((error) => console.error("Error fetching blogs:", error));
    }, []);

    return (
        <div className="w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {blogs.map((blog) => (
                <Blog
                    key={blog.id}
                    blog={blog}
                    handleTooAddBookmark={handleTooAddBookmark}
                    handleMarkAssRead={handleMarkAssRead}
                />
            ))}
        </div>
    );
};

Blogs.propTypes = {
    handleTooAddBookmark: PropTypes.func, // Add missing comma
    handleMarkAssRead: PropTypes.func,
};

export default Blogs;
