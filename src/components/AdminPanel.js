import axios from 'axios';
import { useEffect, useState } from 'react';
import AdminPost from './AdminPost';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const [adminPosts, setAdminPosts] = useState([]);

  useEffect(() => {
    fetchAdminComments();
  }, []);

  const fetchAdminComments = () => {
    axios
      .get('/api/posts')
      .then((response) => {
        setAdminPosts(response.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center w-100 flex-col items-center">
      <ol className="list-decimal w-full flex flex-col items-center justify-center">
        {adminPosts.map((aPost) => {
          return (
            <AdminPost
              key={aPost._id}
              post={aPost}
              fetchAdminComments={fetchAdminComments}
            />
          );
        })}
      </ol>
      <div className="mt-40">
        <Link to="/new-post">
          <button className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 shadow rounded-full">
            New Blog Post
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;
