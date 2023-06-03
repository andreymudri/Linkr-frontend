import { useContext, useState } from "react";
import { Content, MainContainer, Sidebar } from "./Home.styles.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ApiURL } from "../../App.js";
import UserContext from "../../contexts/UserContext.js";
import TokenContext from "../../contexts/TokenContext.js";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [authOption, setAuthoption] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);
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
    if (email.length < 1) {
      return alert("Email não pode estar vazio!");
    }
    if (password.length < 1) {
      return alert("Senha não pode estar vazio!");
    }
    setLoading(true);
    axios
      .post(`${ApiURL}/signin`, bodysignIn)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user)
        setToken(res.data.token)
        localStorage.setItem("user", res.data.user);
        navigate("/timeline");
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setLoading(false);
          console.log(err);
          return alert("Email ou senha incorreta!");
        }
      });
  }

  function signUp(event) {
    event.preventDefault();

    if (email.length < 1) {
      return alert("Email não pode estar vazio!");
    }
    if (password.length < 1) {
      return alert("Senha não pode estar vazio!");
    }
    if (username.length < 1) {
      return alert("Nome de usuário não pode estar vazio!");
    }
    if (image.length < 1) {
      return alert("Foto de perfil não pode estar vazia!");
    }
    setLoading(true);
    axios
      .post(`${ApiURL}/signup`, bodysignUp)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        if (err.response.status === 409) {
          return alert("Email já existente!");
        }
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
            data-test="email"
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            data-test="password"
          />
          {authOption ? (
            <>
              <input
                placeholder="username"
                type="username"
                onChange={(event) => setUsername(event.target.value)}
                data-test="username"
              />
              <input
                placeholder="picture url"
                type="picture"
                onChange={(event) => setImage(event.target.value)}
                data-test="picture-url"
              />
            </>
          ) : null}
          <button type="submit" disabled={loading} data-test={authOption ? "sign-up-btn":"login-btn"}>
            {authOption ? "Sign Up" : "Log In"}
          </button>
        </form>
        {!authOption ? (
          <p onClick={handleAuthOption} data-test="sign-up-link">First time? Create an account!</p>
        ) : (
          <p onClick={handleAuthOption}data-test="login-link">Switch back to login!</p>
        )}
      </Sidebar>
    </MainContainer>
  );
}
