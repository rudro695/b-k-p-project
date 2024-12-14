import { useState } from "react";
import "./App.css";

import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const [reading_time, setReadingTime] = useState(0);

    const handleTooAddBookmark = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    };

    const handleMarkAssRead = (time) => {
        setReadingTime((prevTime) => prevTime + time);


        const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
        setBookmarks(remainingBookmarks);
    };

    return (
        <>
            <Header></Header>

            <div className="md:flex max-w-7xl mx-auto ">
                <Blogs
                    handleTooAddBookmark={handleTooAddBookmark}
                    handleMarkAssRead={handleMarkAssRead}
                ></Blogs>
                <Bookmarks
                    bookmarks={bookmarks}
                    reading_time={reading_time}
                ></Bookmarks>
            </div>
        </>
    );
}

export default App;
