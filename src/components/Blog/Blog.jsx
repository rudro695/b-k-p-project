
import  PropTypes  from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleTooAddBookmark,handleMarkAssRead}) => {
    const {title,blog_cover_img,author,author_img,reading_time,hashtags,date,id} = blog;

    
    return (
        <div className='mb-20'>
            <img  className='w-full mb-8' src= {blog_cover_img} alt= {`cover picture of the title ${title} `} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src= {author_img} alt="" />
                    <div className='ml-6'>
                    <h3 className='text-3xl'>{author} </h3>
                    <p> {date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick=  {()=> handleTooAddBookmark (blog) } className='ml-4'><FaBookmark></FaBookmark> </button>

                </div>
            </div>
            <h2 className='text-4xl'>{title} </h2>
            <p>
                {
                    hashtags.map((hash,idx)=> <span  key={idx} ><a href="">#{hash} </a></span>)
                }
            </p>
            <button onClick={ ()=>  handleMarkAssRead (id, reading_time) } className=' underline font-bold bg-purple-600'>mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleTooAddBookmark: PropTypes.func,
    handleMarkAssRead: PropTypes.func
       

};

export default Blog;