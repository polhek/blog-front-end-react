import axios from 'axios';
import { useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';

const Comment = ({ text, author, id, fetchAllComment }) => {
  const loggedIn = useSelector((state) => state.loggedIn);

  const deleteComment = () => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .delete(`/api/comments/${id}/delete`, {
          headers: { Authorization: token },
        })
        .then((res) => {
          console.log(res);
          fetchAllComment();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="rounded bg-gray-100 p-3 mt-2 flex flex-col justify-center items-stretch">
      <div className="flex items-center justify-between">
        <p>{text}</p>
        <div className="flex justify-end items-center">
          <span className="font-bold mr-2">By:</span> {author}
        </div>
      </div>
      {loggedIn && (
        <div className="mt-2 flex justify-end">
          <button
            onClick={deleteComment}
            className="flex items-center bg-red-600 hover:bg-red-900 p-1 rounded-xl text-white"
          >
            <FaTrash className="mr-1" /> Delete comment!
          </button>
        </div>
      )}
    </div>
  );
};

export default Comment;
