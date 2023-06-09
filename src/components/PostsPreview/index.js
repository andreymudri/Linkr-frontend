import {ContainerPreview, 
    ContainerTexts,
    PreviewText,
    PreviewDescription,
    ContainerPhoto,
    Url} from "./style";
import { Link } from "react-router-dom";

export default function PostsPreview({titlePreview, descriptionPreview, postUrl, imagePreview}) {
    return (
        
        <ContainerPreview data-test="link">
            <ContainerTexts>
                <PreviewText>{titlePreview}</PreviewText>
                <PreviewDescription>
                {descriptionPreview}
                </PreviewDescription>
                <Link data-test="link" to={postUrl} target="_blank">
                <Url>{postUrl}</Url>
                </Link>
            </ContainerTexts>
            <ContainerPhoto>
                <img src={imagePreview} alt="Preview post" />
            </ContainerPhoto>
        </ContainerPreview> 
        
    )
}