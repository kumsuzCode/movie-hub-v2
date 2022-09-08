import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import popcorn from "../assets/popcorn.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/home");
    console.log(result);
  };

  return (
    <div id="login">
      <div className="login__container">
        <div className="row row__login">
          <h2 className="login__header">
            Welcome to <span className="blue">Movie Hub</span>{" "}
          </h2>
          <p className="login__para">
            MovieHub is a one-stop shop platform that caters to all your
            movie-browsing needs! Browse and save your favourite movies in one
            convenient place so you can watch them later.
          </p>
          <div className="login__img--wrapper">
            <img className="login__img" src={popcorn} alt="" />
          </div>
          <p className="login__para">Sign in with Google to proceed!</p>
          <button onClick={signInWithGoogle} className="sign-in">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
