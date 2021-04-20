import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const currentUser = useSelector((state) => state.user);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    newPost();
  };

  const newPost = () => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .post(
          '/api/posts/create',
          {
            title: title,
            text: text,
            userID: currentUser._id,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then((res) => {
          console.log(res.status);
          setText('');
          setTitle('');
          history.push('');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="flex justify-center">
      <div className="mt-10 w-2/3">
        <form onSubmit={submitHandler}>
          <div className="bg-white p-10 rounded-xl shadow">
            <h3 className="font-bold text-3xl">Add new blog-post:</h3>
            <div className="flex flex-col">
              <label htmlFor="title" className="font-bold">
                Title of blogpost:
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="bg-gray-200 py-2 px-1 rounded"
                placeholder="Enter title of blogpost"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="text" className="font-bold">
                Blog text:
              </label>
              <textarea
                type="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                className="bg-gray-200 h-96 rounded p-1"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-3 bg-blue-600 p-1 rounded hover:bg-blue-800 hover:shadow"
            >
              <span className="text-white">Add blogpost!</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
