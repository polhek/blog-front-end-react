import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { setUserUser } from '../actions/userActions';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllComment();
    autoLogin();
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

  const autoLogin = () => {
    const token = localStorage.getItem('token');

    axios
      .get('/api/users/profile', {
        headers: { Authorization: token },
      })
      .then((res) => {
        const user = res.data;
        dispatch(setUserUser(user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center flex-col items-center mt-10">
      {posts &&
        posts.map((post) => {
          return (
            <Post
              key={post._id}
              post={post}
              fetchAllComment={fetchAllComment}
            />
          );
        })}
    </div>
  );
};

export default Posts;
