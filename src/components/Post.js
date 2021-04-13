import Comments from './Comments';
import { useState } from 'react';
import { FaComments } from 'react-icons/fa';

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  const showClickHandler = () => {
    setShowComments(!showComments);
  };

  const containerStyle = {
    backgroundColor: !showComments && 'white',
    background: showComments ? 'none' : 'white',
  };
  return (
    <div style={containerStyle} className="w-100 w-3/5 flex flex-col  rounded ">
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
          <h3>Created at: {post.createdAt}</h3>
        </div>
      </div>

      <Comments comments={post.comments} showComments={showComments} />
    </div>
  );
};

export default Post;
