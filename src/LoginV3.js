import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import Login from "./Login";
import { Base64 } from "js-base64";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import FormData from 'form-data';

const LoginV3 = ({ setToken }) => {
  const baseUrl = "http://localhost:8080/api";

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [isPending, setIsPending] = useState(false);



  let history = useHistory();

  function goHome() {
    history.push("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData()
    form.append("username", username);
    form.append("password", password);
    console.log(username);
    console.log(`created: ${form.username}, ${form.password}`);

    setIsPending(true);
    
    fetch(baseUrl.concat("/login"), {
      method: "POST",
      body: form,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => { 
      if (response.ok) {
        console.log("login complete");
        setIsPending(false);
        setToken(JSON.stringify(response.data));
        goHome();
      } else {
        console.log("login failed");
        alert("login failed...ummm try again?");
        setIsPending(false);
      }
    });

    // fetch("http://localhost:3000/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(user),
    // }).then((response) => {
    //     if (response) {
    //         console.log({user})
    //         console.log("login complete");
    //         setIsPending(false);
    //         setToken('breadTime');
    //         goHome();
    //     } else {
    //         console.log("login failed");
    //         setIsPending(false);
    //     }
    // });
  };

  return (
    <div className="imgs background" id="view">
      <div className="whiteBox">
        <div className="loginV3">
          <h2>Login to an Account</h2>

          <form onSubmit={handleSubmit}>
            <label>Username/Email</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>

            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {!isPending && <button>Login</button>}
            {isPending && <button disabled>Loading...</button>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginV3;

Login.PropTypes = {
  setToken: PropTypes.func.isRequired,
};
