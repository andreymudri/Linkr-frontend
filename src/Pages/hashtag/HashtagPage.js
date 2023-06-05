import { useParams } from "react-router-dom"
import Header from "../../components/Header/index.js"
import Post from "../../components/Post/index.js"
import Search from "../../components/Search/index.js"
import {
  Container,
  Mobile,
  Title,
  PostContainer,
  PrincipalContainer,
  TrendingContainer,
} from "../Timeline/style.js"
import { ToastContainer, toast } from "react-toastify"
import { useContext, useEffect, useState } from "react"
import TokenContext from "../../contexts/TokenContext.js"
import UserContext from "../../contexts/UserContext.js"
import postApi from "../../services/postsApi.js"

export default function HashtagPage() {
  const { hashtag: hashtagUrl } = useParams()

  //   const { token } = useContext(TokenContext)
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ3LCJpYXQiOjE2ODU5MTg4OTV9._iYrxQg89AlOIWASGMMlzBscMUalBoTSGOgsNoeWR_o"
  const { user } = useContext(UserContext)

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const [posts, setPosts] = useState([])

  useEffect(() => {
    postApi
      .getPostsByHashtag(hashtagUrl, config)
      .then((res) => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }, [])

  return (
    <PrincipalContainer>
      <ToastContainer />
      <Container>
        <Header />
        <Mobile>
          <Search />
        </Mobile>
        <Title>#{hashtagUrl}</Title>
        <PostContainer>
          <Post />
        </PostContainer>
      </Container>
      <TrendingContainer></TrendingContainer>
    </PrincipalContainer>
  )
}
