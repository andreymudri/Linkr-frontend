import { Link } from "react-router-dom"
import { UserImage, Username, UserPost, Description, 
ContainerPreview, Container, ContainerImage, ContainerTexts,
PreviewText, PreviewDescription, ContainerPhoto, Url, PostContainer,
ContainerOptions, TrashIcon, EditIcon, Icons, DescriptionInput } from "./style"
import axios from "axios"
import { useContext, useEffect, useState, useRef} from "react"
import UserContext from "../../contexts/UserContext";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

export default function Post ({posts}){

    const [metaDataList, setMetaDataList] = useState([]);
    const [descriptionInput, setDescriptionInput] = useState([]);
    const [newDescription, setNewDescription] = useState("");
    const [editingIndex, setEditingIndex] = useState(-1);
    const user = JSON.parse(localStorage.getItem("user"));
    const descriptionRef = useRef(null);

    useEffect(() => {
        posts.forEach((p) => {
            setDescriptionInput([...descriptionInput, false])
            getMetaData(p.postUrl);
        });
    }, [posts]);

    useEffect(() => {
        if (editingIndex !== -1 && descriptionRef.current) {
          descriptionRef.current.focus();
        }
      }, [editingIndex]);

    
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
    }

    function getMetaData(url) {
        axios.get(`https://jsonlink.io/api/extract?url=${url}`)
            .then(res => {
                const metadata = res.data;
                setMetaDataList((prevList) => [...prevList, metadata]);
            })
            .catch(err => console.log(err))
    }

    if (metaDataList.length === 0){
        return (
            <PostContainer>
                Loading...
            </PostContainer>
        )
    }

    function modificateDescription(index, description){
        if (editingIndex === index) {
            setEditingIndex(-1);
            setNewDescription('');
          } else {
            setEditingIndex(index);
            setNewDescription(description);
          }
    }
    function editPost (id){
        return
    }

    function deletePost(id){
        return
    }
    
    return (
        <PostContainer>
        {posts.length === 0 ? "There are no posts yet" : posts.map((p, index) => (
            <UserPost>
                <ContainerImage>
                    <UserImage src={p.image}/>
                </ContainerImage>
                <Container>
                    <ContainerOptions>
                    <Link to={`/user/${s.id}`}>
                        <Username>{p.username}</Username>
                        </Link>
                        {p.userId === user.id ? (
                            <Icons>
                                <EditIcon onClick={() => {
                                    if (descriptionInput[index] === true ) {
                                        modificateDescription(index, p.description);
                                    }
                                    const newDescriptionInput = [...descriptionInput]
                                    newDescriptionInput[index] = true
                                    setDescriptionInput(newDescriptionInput)
                                    setNewDescription(p.description)
                                    editPost(p.id)
                                    }}/>
                                <TrashIcon onClick={deletePost}/>
                            </Icons>
                        ) : (
                           "" 
                        )}   
                    </ContainerOptions>
                    {editingIndex === index ? (
                    <DescriptionInput
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
                        p.description
                        )}
                    </Description>
                    )}
                    <ContainerPreview>
                        <ContainerTexts>
                            <PreviewText>{metaDataList[index]?.title}</PreviewText>
                            <PreviewDescription>
                                {metaDataList[index]?.description}
                            </PreviewDescription>
                            <Link to={p.postUrl} target="_blank"><Url>{p.postUrl}</Url></Link>
                        </ContainerTexts>
                        <ContainerPhoto>
                            <img src={metaDataList[index]?.images[0]} alt="Preview post" />
                        </ContainerPhoto>
                    </ContainerPreview>
                </Container>   
            </UserPost>
        ))}
        </PostContainer>
    )
}