import { Link } from "react-router-dom"
import {
  UserImage,
  Username,
  UserPost,
  Description,
  ContainerPreview,
  Container,
  ContainerImage,
  ContainerTexts,
  PreviewText,
  PreviewDescription,
  ContainerPhoto,
  Url,
  PostContainer,
  ContainerOptions,
  TrashIcon,
  EditIcon,
  Icons,
  DescriptionInput,
  Comments,
  CommentIcon,
  NoPost,
} from "./style"
import axios from "axios"
import { useContext, useEffect, useState, useRef } from "react"
import { ApiURL } from "../../App"
import UserContext from "../../contexts/UserContext"
import Modal from "react-modal"
import TokenContext from "../../contexts/TokenContext"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Likes from "../Likes.js"

export default function Post({ posts, updatePostsList }) {
  const [descriptionInput, setDescriptionInput] = useState([])
  const [editingIndex, setEditingIndex] = useState(-1)
  const [newDescription, setNewDescription] = useState("")
  const [postId, setPostId] = useState("")
  const [disableInput, setDisableInput] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const postIdRef = useRef("")

  const { token } = useContext(TokenContext)
  const { user } = useContext(UserContext)

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }

  const descriptionRef = useRef(null)

  const customStyles = {
    content: {
      width: "400px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "400",
      color: "#fff",
      borderRadius: "30px",
      backgroundColor: "#333333",
      boxSizing: "border-box",
    },
  }

  useEffect(() => {
    posts.forEach((p) => {
      setDescriptionInput([...descriptionInput, false])
    })
  }, [posts])

  useEffect(() => {
    if (editingIndex !== -1 && descriptionRef.current) {
      descriptionRef.current.focus()
    }
  }, [editingIndex])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      setEditingIndex(-1)
    }
    if (event.key === "Enter") {
      setDisableInput(true)
      const postId = postIdRef.current
      console.log("valor de e.target.value:" + event.target.value)
      console.log("valor de postId:" + postId)
      console.log(typeof postId)
      axios
        .put(
          `${ApiURL}/posts/${postId}`,
          { description: event.target.value },
          config
        )
        .then((res) => {
          console.log(res.data)
          setDisableInput(false)
          setEditingIndex(-1)
          updatePostsList()
        })
        .catch((err) => {
          setDisableInput(false)
          alert(err.response.data)
        })
    }
  }

  function modificateDescription(index, description) {
    if (editingIndex === index) {
      setEditingIndex(-1)
      setNewDescription("")
    } else {
      setEditingIndex(index)
      setNewDescription(description)
    }
  }

  function deletePost(id) {
    axios
      .delete(`${ApiURL}/posts/${id}`, config)
      .then((res) => {
        setDeleting(false)
        setIsOpen(false)
        toast(res.data)
        updatePostsList()
      })
      .catch((err) => {
        setDeleting(false)
        setIsOpen(false)
        console.log(err)
        toast.error("Não foi possível excluir o post!")
      })
  }

  function changePostId(postId) {
    postIdRef.current = postId
    setPostId(postId)
  }

  return (
    <PostContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div
          style={{
            margin: "10px",
            fontWeight: "700",
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          Are you sure you want to delete this post?
        </div>
        <div
          style={{
            width: "280px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              borderRadius: "10px",
              border: "none",
              width: "100px",
              marginLeft: "10px",
              height: "40px",
              color: "#fff",
              backgroundColor: "#1777F2",
              margin: "10px auto",
              fontSize: "14px",
            }}
            onClick={() => {
              setDeleting(true)
              deletePost(postId)
            }}
          >
            {deleting ? "Loading..." : "Yes, delete it"}
          </button>
          <button
            style={{
              borderRadius: "10px",
              border: "none",
              width: "100px",
              height: "40px",
              backgroundColor: "#fff",
              color: "#1777F2",
              margin: "10px auto",
              fontSize: "14px",
            }}
            onClick={() => setIsOpen(false)}
          >
            No, go back
          </button>
        </div>
      </Modal>
      <ToastContainer />
      {posts.length === 0 ? (
        <NoPost data-test="message">There are no posts yet</NoPost>
      ) : (
        posts.map((p, index) => (
          <UserPost data-test="post" key={index}>
            <ContainerImage>
              <Link to={`/user/${p.userId}`}>
                <UserImage src={p.image} />
              </Link>
              <Likes
                likers={p.likers}
                likesCount={p.likesCount}
                user={user}
                postId={p.id}
                updatePostsList={updatePostsList}
              />
              <Comments>
                <CommentIcon />
                <p>0 comments</p>
              </Comments>
            </ContainerImage>
            <Container>
              <ContainerOptions>
                <Link to={`/user/${p.userId}`}>
                  <Username data-test="username">{p.username}</Username>
                </Link>
                {p.userId === user.id ? (
                  <Icons>
                    <EditIcon
                      data-test="edit-btn"
                      onClick={() => {
                        console.log("Valor de p.id:" + p.id)
                        changePostId(p.id)
                        if (descriptionInput[index] === true) {
                          modificateDescription(index, p.description)
                        }
                        const newDescriptionInput = [...descriptionInput]
                        newDescriptionInput[index] = true
                        setDescriptionInput(newDescriptionInput)
                        setNewDescription(p.description)
                      }}
                    />
                    <TrashIcon
                      data-test="delete-btn"
                      onClick={() => {
                        setPostId(p.id)
                        setIsOpen(true)
                      }}
                    />
                  </Icons>
                ) : (
                  ""
                )}
              </ContainerOptions>
              {editingIndex === index ? (
                <DescriptionInput
                  data-test="description"
                  disabled={disableInput}
                  ref={descriptionRef}
                  value={newDescription}
                  onChange={(e) => {
                    console.log(e.target.value)
                    setNewDescription(e.target.value)
                  }}
                />
              ) : (
                <Description data-test="edit-input">
                  {p.description === null || p.description === ""
                    ? ""
                    : p.description}
                </Description>
              )}
              <ContainerPreview>
                <ContainerTexts>
                  <PreviewText>{p.titlePreview}</PreviewText>
                  <PreviewDescription>
                    {p.descriptionPreview}
                  </PreviewDescription>
                  <Link data-test="link" to={p.postUrl} target="_blank">
                    <Url>{p.postUrl}</Url>
                  </Link>
                </ContainerTexts>
                <ContainerPhoto>
                  <img src={p.imagePreview} alt="Preview post" />
                </ContainerPhoto>
              </ContainerPreview>
            </Container>
          </UserPost>
        ))
      )}
    </PostContainer>
  )
}
