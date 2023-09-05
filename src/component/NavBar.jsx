import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="flex items-center justify-between h-16 px-40 w-full bg-slate-900 text-white text-lg">
    <h1 className="uppercase font-bold border-2 p-1 hover:mx-2 duration-300">
      <Link to="/" className="text-red-400">
        <span className="text-red-700">React</span>
        {' '}
        Capstone
      </Link>
    </h1>
    <ul className="flex gap-7">
      <li className="hover:text-gray-400 duration-300">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-gray-400 duration-300">
        <Link to="details">Details</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
