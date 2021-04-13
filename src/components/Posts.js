import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchAllComment();
  }, []);

  const fetchAllComment = () => {
    axios
      .get('/api/posts')
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center mt-10">
      {posts &&
        posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
    </div>
  );
};

export default Posts;
