import { Link, useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/index.js"
import Post from "../../components/Post/index.js"
import Search from "../../components/Search/index.js"
import {
  Container,
  Mobile,
  Title,
  PrincipalContainer,
  TrendingContainer,
} from "../Timeline/style.js"
import { ToastContainer, toast } from "react-toastify"
import { useContext, useEffect, useState } from "react"
import TokenContext from "../../contexts/TokenContext.js"
import UserContext from "../../contexts/UserContext.js"
import postApi from "../../services/postsApi.js"
import { HashtagLink } from "./style.js"

export default function HashtagPage() {
  const { hashtag: hashtagUrl } = useParams()
  const [trendingHashtags, setTrendingHashtags] = useState([])
  const { token } = useContext(TokenContext)
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (!token) {
      navigate("/")
    }
    postApi
      .getPostsByHashtag(hashtagUrl, config)
      .then((res) => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })

    postApi
      .getTrendingHashtags()
      .then((res) => setTrendingHashtags(res.data))
      .catch((err) => toast.error("Error on loading trending hashtags"))
  }, [hashtagUrl])

  return (
    <PrincipalContainer>
      <ToastContainer />
      <Container>
        <Header />
        <Mobile>
          <Search />
        </Mobile>
        <Title>#{hashtagUrl}</Title>
        <Post posts={posts} />
      </Container>
      <TrendingContainer>
        <div>trending</div>
        {trendingHashtags.map((h) => (
          <HashtagLink key={h.id} to={`/hashtag/${h.name}`}>
            # {h.name}
          </HashtagLink>
        ))}
      </TrendingContainer>
    </PrincipalContainer>
  )
}
