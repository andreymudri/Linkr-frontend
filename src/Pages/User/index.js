import Header from "../../components/Header";
import Search from "../../components/Search";
import { Container, Mobile, Title } from "./style";
import userApi from "../../services/userAPI";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserHeardline from "../../components/UserHeardline";
import TokenContext from "../../contexts/TokenContext.js";
import Post from "../../components/Post";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function User() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const { token } = useContext(TokenContext);

  function getUser() {
    userApi
      .getUserById(id, token)
      .then((res) => setUser(res.data))
      .catch((err) => toast.error(err.response.data));
  }
  // eslint-disable-next-line
  useEffect(getUser, []);
  if (user === null) {
    return (
      <Container>
        <ToastContainer />
        <Header token={token} />
        <Mobile>
          <Search token={token} />
        </Mobile>
        <Title>Loading...</Title>
      </Container>
    );
  }

  return (
    <Container>
      <ToastContainer />
      <Header token={token} />
      <Mobile>
        <Search token={token} />
      </Mobile>
      <UserHeardline user={user && user.user} />
      <Post posts={user && user.posts} />
    </Container>
  );
}
