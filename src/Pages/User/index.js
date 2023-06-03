import Header from "../../components/Header";
import Search from "../../components/Search";
import { Container, Mobile } from "./style";
import userApi from "../../services/userAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserHeardline from "../../components/UserHeardline";

export default function User() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  function getUser() {
    userApi
      .getUserById(id)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err.response.data));
  }
  // eslint-disable-next-line
  useEffect(getUser, []);

  return (
    <Container>
      <Header />
      <Mobile>
        <Search />
      </Mobile>
      <UserHeardline user={user} />
    </Container>
  );
}
