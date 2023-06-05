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
} from "./style"
import axios from "axios"
import { useContext, useEffect, useState, useRef } from "react"
import { ApiURL } from "../../App"
import UserContext from "../../contexts/UserContext"
import Modal from "react-modal"
import TokenContext from "../../contexts/TokenContext"
import Likes from "../Likes.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Post ({posts, updatePostsList}){


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
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
        }, []);

    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            setEditingIndex(-1);
            setNewDescription('');
        }
        if (event.key === 'Enter') {
            setDisableInput(true)
            axios.put(`${ApiURL}/posts/${postId}`, {description: newDescription}, config)
                .then(res => {
                    console.log(res.data)
                    setDisableInput(false);
                    setDescription(newDescription);
                    setEditingIndex(-1);
                })
                .catch(err => {
                    setDisableInput(false);
                    toast.error("The edit can't be saved! Try again later.")})
        }
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
      setNewDescription("")
    }
    if (event.key === "Enter") {
      setDisableInput(true)
      axios
        .put(
          `${ApiURL}/posts/${postId}`,
          { description: newDescription },
          config
        )
        .then((res) => {
          console.log(res.data)
          setDisableInput(false)
          setDescription(newDescription)
          setEditingIndex(-1)
        })
        .catch((err) => {
          setDisableInput(false)
          console.log(err)
        })
    }
  }


    function deletePost(id){
        axios.delete(`${ApiURL}/posts/${postId}`, config)
            .then(res => {
                setDeleting(false)
                setIsOpen(false)
                toast("Post deleted successfully!")
                updatePostsList()
            })
            .catch(err => {
                setDeleting(false)
                setIsOpen(false)
                console.log(err)
                toast.error("This post can't be deleted! Try again later.")
            })
    }
    
    return (
        <PostContainer>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
            >
            <div style={{ margin: '10px', fontWeight: '700', fontSize: '25px', textAlign: 'center' }}>Are you sure you want to delete this post?</div>
            <div style={{ width: '280px', display: 'flex', justifyContent: 'space-between'}}>
                <button style={{ borderRadius: '10px', border: 'none', width: '100px', marginLeft: '10px', height: '40px',color: '#fff', backgroundColor: '#1777F2',  margin: '10px auto', fontSize: '14px'}}
                onClick={() => {
                    setDeleting(true)
                    deletePost(postId)
                }}
                >{deleting ? 'Loading...' : 'Yes, delete it'}</button>
                <button style={{ borderRadius: '10px', border: 'none', width: '100px', height: '40px', backgroundColor: '#fff', color: '#1777F2', margin: '10px auto', fontSize: '14px'}}
                onClick={() => setIsOpen(false)}
                >No, go back</button>
            </div>
            </Modal>
            <ToastContainer/>
        {posts.length === 0 ? "There are no posts yet" : posts.map((p, index) => (
            <UserPost key={index}  data-test="post" >
                <ContainerImage>
                    <UserImage src={p.image}/>
                </ContainerImage>
                <Container>
                    <ContainerOptions>
                        <Link to={`/user/${p.id}`}>
                            <Username>{p.username}</Username>
                        </Link>
                        {p.userId === user.id ? (
                            <Icons>
                                <EditIcon onClick={() => {
                                    setPostId(p.id);
                                    if (descriptionInput[index] === true ) {
                                        modificateDescription(index, p.description);
                                    }
                                    const newDescriptionInput = [...descriptionInput]
                                    newDescriptionInput[index] = true
                                    setDescriptionInput(newDescriptionInput)
                                    setNewDescription(p.description)
                                    }}/>
                                <TrashIcon onClick={() => {
                                    setPostId(p.id);
                                    setIsOpen(true);
                                }}/>
                            </Icons>
                        ) : (
                           "" 
                        )}   
                    </ContainerOptions>
                    {editingIndex === index ? (
                    <DescriptionInput
                        disabled={disableInput}
                        ref={descriptionRef}
                        value={newDescription}
                        onChange={(e) =>{ 
                            console.log(e.target.value)
                            setNewDescription(e.target.value)}}
                    />
                    ) : (
                    <Description>
                        {p.description === null || p.description === '' ? (
                        ''
                        ) : (
                        description === "" ? p.description : description
                        )}
                    </Description>
                    )}
                    <ContainerPreview>
                        <ContainerTexts>
                            <PreviewText>{p.titlePreview}</PreviewText>
                            <PreviewDescription>
                                {p.descriptionPreview}
                            </PreviewDescription>
                            <Link to={p.postUrl} target="_blank"><Url>{p.postUrl}</Url></Link>
                        </ContainerTexts>
                        <ContainerPhoto>
                            <img src={p.imagePreview} alt="Preview post" />
                        </ContainerPhoto>
                    </ContainerPreview>
                </Container>   
            </UserPost>
        ))}
        </PostContainer>
    )
}
