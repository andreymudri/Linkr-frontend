import { useState } from "react";
import { Content, MainContainer, Sidebar } from "./Signup.styles.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ApiURL } from "../../App.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const bodysignUp = {
    email,
    password,
    username,
    image,
  };

  function signUp(event) {
    event.preventDefault();
    console.log(email);
    if (email.length < 1) {
      return toast.error("Email não pode estar vazio!");
    }
    if (password.length < 1) {
      return toast.error("Senha não pode estar vazio!");
    }
    if (username.length < 1) {
      return toast.error("Nome de usuário não pode estar vazio!");
    }
    if (image.length < 1) {
      return toast.error("Foto de perfil não pode estar vazia!");
    }
    setLoading(true);
    axios
      .post(`${ApiURL}/signup`, bodysignUp)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        navigate('/')
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        toast.error(err.response.data.message);
        if (err.response.status === 409) {
          return toast.error("Email já existente!");
        }
      });
  }

  return (
    <MainContainer>
      <ToastContainer/>
      <Content>
        <article>
          <div>linkr</div>
          <p>save, share and discover the best links on the web</p>
        </article>
      </Content>
      <Sidebar>
        <form onSubmit={signUp}>
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
          <>
            <input
              placeholder="Username"
              type="username"
              onChange={(event) => setUsername(event.target.value)}
              data-test="username"
            />
            <input
              placeholder="Picture url"
              type="picture"
              onChange={(event) => setImage(event.target.value)}
              data-test="picture-url"
            />
          </>
          <button type="submit" disabled={loading} data-test={"sign-up-btn"}>
            Sign Up
          </button>
        </form>

        <p onClick={() => navigate("/")} data-test="login-link">
          Switch back to login!
        </p>
      </Sidebar>
    </MainContainer>
  );
}
