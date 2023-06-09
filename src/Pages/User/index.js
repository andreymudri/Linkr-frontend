import Header from "../../components/Header";
import Search from "../../components/Search";
import UserHeardline from "../../components/UserHeardline";
import Follow from "../../components/Follow";
import Post from "../../components/Post";
import {
  Container,
  Mobile,
  Title,
  TrendingContainer,
  UserAndFollow,
  PostContainer,
  ContainerPostTrend,
} from "./style";
import userApi from "../../services/userAPI";
import postApi from "../../services/postsApi.js";
import TokenContext from "../../contexts/TokenContext.js";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HashtagLink } from "../hashtag/style.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function User() {
  const [userById, setUserById] = useState(null);
  const { id } = useParams();
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);
  const [follow, setFollow] = useState(false);

  const [trendingHashtags, setTrendingHashtags] = useState([]);
  const navigate = useNavigate();

  function getUser() {
    if (!token) {
      navigate("/");
    }

    userApi
      .getUserById(id, token)
      .then((res) => {
        setUserById(res.data);
        setFollow(false);
      })
      .catch((err) => toast.error(err.response.data));

    postApi
      .getTrendingHashtags()
      .then((res) => setTrendingHashtags(res.data))
      .catch((err) => toast.error("Error on loading trending hashtags"));
  }
  // eslint-disable-next-line
  useEffect(getUser, []);

  if (userById === null) {
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
      <UserAndFollow>
        <UserHeardline user={userById && userById.user} />
        {
          // eslint-disable-next-line
          id == user.id ? (
            ""
          ) : (
            <Follow id={id} follow={follow} setFollow={setFollow} />
          )
        }
      </UserAndFollow>
      <ContainerPostTrend>
        <PostContainer>
          <Post posts={userById && userById.posts} />
        </PostContainer>
        <TrendingContainer data-test="trending">
          <div>trending</div>
          {trendingHashtags.map((h) => (
            <HashtagLink
              data-test="hashtag"
              key={h.id}
              to={`/hashtag/${h.name}`}
            >
              # {h.name}
            </HashtagLink>
          ))}
        </TrendingContainer>
      </ContainerPostTrend>
    </Container>
  );
}
