import axios from 'axios';
import { useEffect, useState } from 'react';
import AdminPost from './AdminPost';

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
    <div className="flex justify-center w-100">
      <ol className="list-decimal w-full flex justify-center">
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
    </div>
  );
};

export default AdminPanel;
