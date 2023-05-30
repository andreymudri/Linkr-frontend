import { useState } from "react";
import { Content, MainContainer, Sidebar } from "../styles/Home.styles.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ApiURL } from "../App.js";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [authOption, setAuthoption] = useState(false);
  const navigate = useNavigate();
  const bodysignIn = {
    email,
    password,
  };
  const bodysignUp = {
    email,
    password,
    username,
    image,
  };
  function handleAuthOption() {
    setAuthoption(!authOption);
  }
  function signIn(event) {
    event.preventDefault();
    axios
      .post(`${ApiURL}/signin`, bodysignIn)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user);
        navigate("/timeline");
      })
      .catch((err) => console.log(err));
  }

  function signUp(event) {
    event.preventDefault();
    axios
      .post(`${ApiURL}/signup`, bodysignUp)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  return (
    <MainContainer>
      <Content>
        <article>
          <div>linkr</div>
          <p>save, share and discover the best links on the web</p>
        </article>
      </Content>
      <Sidebar>
        <form onSubmit={authOption ? signUp : signIn}>
          <input
            placeholder="E-mail"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          {authOption ? (
            <>
              <input
                placeholder="username"
                type="username"
                onChange={(event) => setUsername(event.target.value)}
              />
              <input
                placeholder="picture url"
                type="picture"
                onChange={(event) => setImage(event.target.value)}
              />
            </>
          ) : null}
          <button type="submit">{authOption ? "Sign Up" : "Log In"}</button>
        </form>
        {!authOption ? (
          <p onClick={handleAuthOption}>First time? Create an account!</p>
        ) : (
          <p onClick={handleAuthOption}>Switch back to login!</p>
        )}
      </Sidebar>
    </MainContainer>
  );
}
