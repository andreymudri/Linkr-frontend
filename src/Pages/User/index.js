import Header from "../../components/Header";
import Search from "../../components/Search";
import { Container, Mobile } from "./style";
import userApi from "../../services/userAPI";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserHeardline from "../../components/UserHeardline";
import TokenContext from "../../contexts/TokenContext.js";

export default function User() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const { token } = useContext(TokenContext);

  function getUser() {
    userApi
      .getUserById(id, token)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err.response.data));
  }
  // eslint-disable-next-line
  useEffect(getUser, []);

  return (
    <Container>
      <Header />
      <Mobile>
        <Search data-test={"user-search"} token={token} />
      </Mobile>
      <UserHeardline user={user} />
    </Container>
  );
}
