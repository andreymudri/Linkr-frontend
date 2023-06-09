import Header from "../../components/Header"
import Search from "../../components/Search"
import Post from "../../components/Post"
import useInterval from "use-interval"
import { BiRefresh } from "react-icons/bi"
import {
  Container,
  Mobile,
  Title,
  UserImage,
  PublishContainer,
  Text,
  Url,
  Description,
  Button,
  PrincipalContainer,
  TrendingContainer,
  MessageNoPost,
  RefreshButton,
} from "./style"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { ApiURL } from "../../App"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import UserContext from "../../contexts/UserContext"
import TokenContext from "../../contexts/TokenContext"
import postApi from "../../services/postsApi.js"
import { HashtagLink } from "../hashtag/style.js"
import { useNavigate } from "react-router-dom"

export default function Timeline() {
  const formInitialState = {
    postUrl: "",
    description: "",
  }

  const { token } = useContext(TokenContext)
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const [posts, setPosts] = useState(null)
  const [formData, setFormData] = useState(formInitialState)
  const [publishing, setPublishing] = useState(false)
  const [trendingHashtags, setTrendingHashtags] = useState([])
  const [messageNotPosts, setMessageNotPosts] = useState("")
  const [newPostsCount, setNewPostsCount] = useState(0)
  const [lastId, setLastId] = useState(1)
  useEffect(() => {
    if (!token) {
      navigate("/")
    }

    axios
      .get(`${ApiURL}/posts`, config)
      .then((res) => {
        setLastId(res.data[0].id)
        setPosts(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response)
        if (err.response.status === 404) {
          setMessageNotPosts(err.response.data)
        } else {
          toast.error(
            "An error occured while trying to fetch the posts, please refresh the page"
          )
        }
      })

    postApi
      .getTrendingHashtags()
      .then((res) => setTrendingHashtags(res.data))
      .catch((err) => toast.error("Error on loading trending hashtags"))
  }, [])

  useInterval(() => {
    if (posts && posts.length === 0) {
      axios
        .get(`${ApiURL}/posts`, config)
        .then((res) => {
          setNewPostsCount(res.data.length)
        })
        .catch((err) => {
          console.log("Nenhum post novo :b")
        })
    }

    if (posts && posts.length > 0) {
      postApi
        .verifyNewPosts(lastId, config)
        .then((res) => {
          setNewPostsCount(res.data.newPostsCount)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, 15 * 1000)

  if (posts === null && messageNotPosts === "") {
    return (
      <PrincipalContainer>
        <ToastContainer />
        <Container>
          <Header token={token} />
          <Mobile>
            <Search token={token} />
          </Mobile>
          <Title>Loading...</Title>
        </Container>
      </PrincipalContainer>
    )
  }

  function updatePostsList() {
    axios
      .get(`${ApiURL}/posts`, config)
      .then((res) => {
        setPosts(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        toast.error(err.response.data.error)
      })
  }
  function handleForm(e) {
    e.preventDefault()
    setPublishing(true)
    if (formData.postUrl === "") {
      toast.error("Preencha o campo da URL!", { autoClose: 1500 })
      return
    }
    const body = {
      description: formData.description,
      postUrl: formData.postUrl,
    }
    axios
      .post(`${ApiURL}/users/${user.id}/posts`, body, config)
      .then((res) => {
        setFormData(formInitialState)
        toast("Post criado com sucesso!", { autoClose: 1500 })
        setPublishing(false)
        updatePostsList()
      })
      .catch((err) => {
        console.log(err)
        toast.error("Houve um erro ao publicar seu link!")
        setPublishing(false)
      })
  }

  return (
    <PrincipalContainer>
      <ToastContainer />
      <Container>
        <Header />
        <Mobile>
          <Search token={token} />
        </Mobile>
        <Title>timeline</Title>
        <PublishContainer onSubmit={handleForm} data-test="publish-box">
          <UserImage src={user.image} />
          <Text>What are you going to share today?</Text>
          <Url
            data-test="link"
            placeholder="http:// ..."
            disabled={publishing}
            id="postUrl"
            value={formData.postUrl}
            onChange={(e) =>
              setFormData({ ...formData, postUrl: e.target.value })
            }
          />
          <Description
            data-test="description"
            placeholder="Awesome article about #javascript"
            disabled={publishing}
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <Button disabled={publishing} data-test="publish-btn">
            {publishing ? "Publishing..." : "Publish"}
          </Button>
        </PublishContainer>
        {newPostsCount === 0 ? (
          ""
        ) : (
          <RefreshButton>
            {`${newPostsCount} new posts,load more`}
            <BiRefresh size="2em" />
          </RefreshButton>
        )}
        <MessageNoPost>{messageNotPosts}</MessageNoPost>
        {posts === null ? (
          ""
        ) : (
          <Post posts={posts} updatePostsList={updatePostsList} />
        )}
      </Container>
      <TrendingContainer data-test="trending">
        <div>trending</div>
        {trendingHashtags.map((h, index) => (
          <HashtagLink
            data-test="hashtag"
            key={index}
            to={`/hashtag/${h.name}`}
          >
            # {h.name}
          </HashtagLink>
        ))}
      </TrendingContainer>
    </PrincipalContainer>
  )
}
