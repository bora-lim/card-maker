import React from "react";
import styles from "./common.module.css";

const Header = (props) => {
  const state = props.user;

  const signOut = (e) => {
    e.preventDefault();
    props.signOut();
  };

  return (
    <header className={styles.header}>
      <img src="../images/logo.png" />
      <h1>Business Card Maker</h1>

      {state && (
        <div className={styles.user}>
          <p>{state}님 안녕하세요!</p> <button onClick={signOut}>logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
