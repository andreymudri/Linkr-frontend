import styled from "styled-components";

export const Image = styled.div`
width: 53px;
height: 53px;
border-radius: 26.5px;
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`