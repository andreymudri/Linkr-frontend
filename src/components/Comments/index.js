import { 
    CommentsContainer,
    UserComment,
    CommentTexts,
    CommentUserName,
    UserImage,
    Comment,
    ContainerMakeComment,
    MakeComment,
    IconComment
} from "./style"

export default function Comments({}){
    return (
        <UserComment>
            
            <UserImage src="data:image/png;base64,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" />
            
            <CommentTexts>
                <CommentUserName>
                    <h1>João Avatares</h1>
                    <p>• following</p>
                </CommentUserName>
                <Comment>
                    Adorei esse post, ajuda muito a usar Material UI com React!
                </Comment>
            </CommentTexts>
        </UserComment>
    )
}