import React from "react";
import { PropsTypeOne } from "../Interfaces";
import classes from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = ({ children }: PropsTypeOne) => {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
};
export default Layout;
