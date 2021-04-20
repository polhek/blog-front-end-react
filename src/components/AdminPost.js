import axios from 'axios';
import { useSelector } from 'react-redux';

const AdminPost = ({ post, fetchAdminComments }) => {
  const currentUser = useSelector((state) => state.user);

  const changeBlogStatus = () => {
    console.log('lounched');
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .put(
          `/api/posts/${post._id}/update`,
          {
            title: post.title,
            text: post.text,
            userID: currentUser._id,
            status: !post.status,
          },
          {
            headers: { Authorization: token },
            params: { id: post._id },
          }
        )
        .then((r) => {
          console.log(r.status);
          fetchAdminComments();
        })
        .catch((e) => console.log(e));
    }
  };

  const deleteBlogPost = () => {
    console.log('delete lounched!!');
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .delete(`/api/posts/${post._id}/delete`, {
          headers: { Authorization: token },
          params: { id: post._id },
        })
        .then((res) => {
          console.log(res.status);
          fetchAdminComments();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="bg-white flex rounded-xl  mt-10 p-5 shadow-xl border">
      <li className="flex justify-around items-center">
        <span className="font-bold">Blog title:</span> {post.title}
        <span className="mx-3 font-bold">Published:</span>
        {!post.status ? (
          <span className="text-red-600 bg-red-100 rounded">No</span>
        ) : (
          <span className="text-green-700 bg-green-100 rounded">Yes</span>
        )}
        {!post.status ? (
          <>
            <p className="font-bold mx-4">You want to publish this blog?</p>
            <button
              onClick={changeBlogStatus}
              className="bg-blue-600 p-1 rounded hover:bg-blue-800 hover:shadow"
            >
              <span className="text-white">Publish blog!</span>
            </button>
          </>
        ) : (
          <>
            <p className="font-bold mx-4">You want to unpublish this blog?</p>
            <button
              onClick={changeBlogStatus}
              className="bg-red-600 p-1 rounded hover:bg-red-800 hover:shadow"
            >
              <span className="text-white">Unpublish blog!</span>
            </button>
          </>
        )}
        <p className="font-bold mx-4">You want to delete this blog?</p>
        <button
          onClick={deleteBlogPost}
          className="bg-blue-600 p-1 rounded hover:bg-blue-800 hover:shadow"
        >
          <span className="text-white">Delete blog!</span>
        </button>
      </li>
    </div>
  );
};

export default AdminPost;
