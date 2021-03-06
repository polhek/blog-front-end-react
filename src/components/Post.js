import Comments from './Comments';
import { useState } from 'react';
import { FaComments } from 'react-icons/fa';
import Moment from 'react-moment';

const Post = ({ post, fetchAllComment }) => {
  const [showComments, setShowComments] = useState(false);
  const dateToFormat = new Date(post.createdAt);
  const showClickHandler = () => {
    setShowComments(!showComments);
  };

  const containerStyle = {
    backgroundColor: !showComments && 'white',
    background: showComments ? 'none' : 'white',
  };
  return (
    <div
      style={containerStyle}
      className="w-100 w-3/5 flex flex-col mt-10 rounded"
    >
      <div className="bg-white rounded-xl shadow ">
        <div className="flex justify-between p-5">
          <h2>Title: {post.title}</h2>
          <h2>Author: {post.author.username}</h2>
        </div>

        <p className="p-5">{post.text}</p>
        <div className="p-5 flex justify-between">
          <button
            onClick={showClickHandler}
            className="flex flex-row items-center bg-gray-500 hover:bg-gray-800 rounded-full p-2 text-white  "
          >
            <FaComments className="mr-2" /> {post.comments.length}
          </button>
          <h3>
            Created at:
            <Moment className="px-1" format="YYYY-MM-DD HH:mm">
              {dateToFormat}
            </Moment>
          </h3>
        </div>
      </div>

      <Comments
        comments={post.comments}
        postID={post._id}
        showComments={showComments}
        fetchAllComment={fetchAllComment}
      />
    </div>
  );
};

export default Post;
