import { Outlet } from 'react-router';
import React from 'react';
import NavBar from './NavBar';

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default Layout;
