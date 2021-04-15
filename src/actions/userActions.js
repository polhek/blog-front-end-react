import axios from 'axios';

const setUser = (payload) => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const fetchUser = (userInfo) => (dispatch) => {
  axios
    .post('https://fierce-everglades-07063.herokuapp.com/api/users/login', {
      username: userInfo.username,
      password: userInfo.password,
    })
    .then((data) => {
      console.log(data.data);
      localStorage.setItem('token', data.data.token);
      dispatch(setUser(data.data.user));
    });
};
