import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
  const signInWithGoogle = () => {
    props.signInWithGoogle();
  };

  const signInWithGithub = () => {
    props.signInWithGithub();
  };

  return (
    <div className={styles.login}>
      <h3>Login</h3>
      <button onClick={signInWithGoogle}>Login with Google</button>
      <button onClick={signInWithGithub}>Login with Github</button>
    </div>
  );
};

export default Login;
