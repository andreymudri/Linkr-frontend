import Header from "../../components/Header";
import Search from "../../components/Search";
import { Container, Mobile, Title, TrendingContainer } from "./style";
import userApi from "../../services/userAPI";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserHeardline from "../../components/UserHeardline";
import TokenContext from "../../contexts/TokenContext.js";
import Post from "../../components/Post";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import postApi from "../../services/postsApi.js";
import { HashtagLink } from "../hashtag/style.js";
import { useNavigate } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const { token } = useContext(TokenContext);
  const [trendingHashtags, setTrendingHashtags] = useState([]);
  const navigate = useNavigate();

  function getUser() {
    if (!token) {
      navigate("/");
    }

    userApi
      .getUserById(id, token)
      .then((res) => setUser(res.data))
      .catch((err) => toast.error(err.response.data));

    postApi
      .getTrendingHashtags()
      .then((res) => setTrendingHashtags(res.data))
      .catch((err) => toast.error("Error on loading trending hashtags"));
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
      <TrendingContainer>
        <div>trending</div>
        {trendingHashtags.map((h) => (
          <HashtagLink to={`/hashtag/${h.name}`}># {h.name}</HashtagLink>
        ))}
      </TrendingContainer>
    </Container>
  );
}
