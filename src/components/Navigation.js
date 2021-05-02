import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="bg-gray-700 flex justify-between h-14 p-10 items-center text-white ">
      <h1 className="font-bold text-2xl">Blog-frontend</h1>
      <Link to="/admin">
        <button className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 shadow rounded-full">
          Admin page
        </button>
      </Link>
    </header>
  );
};

export default Navigation;
