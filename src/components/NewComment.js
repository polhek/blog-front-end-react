import { useState } from 'react';
import axios from 'axios';

const NewComment = ({ postID, fetchAllComment }) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post('/api/comments/create', {
        text: comment,
        author: username,
        postID: postID,
      })
      .then(
        (response) => {
          setComment('');
          setUsername('');
          fetchAllComment();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="mt-2 p-3 flex flex-row w-full">
      <form onSubmit={submitHandler} className="w-full">
        <h3 className="font-bold text-lg">Add New Comment:</h3>
        <div className="flex flex-row m-2 items-center w-100">
          <label htmlFor="username" className="pr-5">
            Username:
          </label>
          <input
            className="bg-gray-700 rounded-xl p-1 w-full text-white"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="Enter your username!"
            required
          />
        </div>
        <div className="flex flex-row m-2 items-center w-100">
          <label htmlFor="comment " className="pr-5">
            Comment:
          </label>
          <input
            className="bg-gray-700 rounded-xl p-1 w-full text-white"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            placeholder="Your comment goes here!"
            type="text"
            required
          />
        </div>
        <button
          type="submit"
          className="flex flex-row items-center bg-gray-500 hover:bg-gray-800 rounded-full p-2 text-white  "
        >
          Send comment!
        </button>
      </form>
    </div>
  );
};

export default NewComment;
