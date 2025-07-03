import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

type LayoutProps = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

const Layout: React.FC<LayoutProps> = ({ theme, setTheme }) => {
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Outlet />
      <Footer theme={theme} setTheme={setTheme} />
    </>
  );
};

export default Layout;
