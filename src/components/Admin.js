import { useState } from 'react';
import AdminPanel from './AdminPanel'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../actions/userActions';


const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const loggedIn = useSelector((state)=> state.loggedIn)
  const adminSubmitHandler = (e) => {
    e.preventDefault();
    const user = { username: username, password: password };
    dispatch(fetchUser(user));


  };

  if (!loggedIn) {
    return (
      <div className="  flex justify-center">
        <div className="bg-white rounded-xl h-full  mt-52 p-5 shadow-xl border w-2/5">
          <form onSubmit={adminSubmitHandler}>
            <h3 className="font-bold text-lg">
              Enter Admin Username and Password:
            </h3>
            <div>
              <label htmlFor="username">Admin username:</label>
              <input
                className="bg-gray-500 rounded p-1 text-white m-2 w-2/3"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Admin password:</label>
              <input
                className="bg-gray-500 rounded p-1 text-white m-2 w-2/3"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex w-100 justify-center">
              <button
                type="submit"
                className="flex flex-row items-center bg-gray-500 hover:bg-gray-800 rounded-full p-2 text-white  "
              >
                Admin login!
              </button>
            </div>
          </form>

        </div>
      </div>
    );
  }

  if (loggedIn) {
    return <AdminPanel />
  }

};

export default Admin;
