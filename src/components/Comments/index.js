import { 
    UserComment,
    CommentTexts,
    CommentUserName,
    UserImage,
    Comment
} from "./style"

export default function Comments({comments}){

    return (
        <>
        {comments === null ? "" : (comments.map((c, index) => (
            <UserComment key={index}>
            
                <UserImage src={c.commentedUserImage} />
                
                <CommentTexts>
                    <CommentUserName>
                        <h1>{c.commentedUser}</h1>
                        <p>{c.followPostOwner ? "• following" : (c.postOwner ? "• post's author" : "")}</p>
                    </CommentUserName>
                    <Comment>
                        {c.comment}
                    </Comment>
                </CommentTexts>
            </UserComment>
         )))}
        </>
    )
}