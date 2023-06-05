import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
   
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #151515;
  text-align: left;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 100vh;
  color:white;
  article {
    margin-right: 25em;
    width: 25vw;
    div {
      font-family: "Passion One";
      font-style: normal;
      font-weight: 700;
      font-size: 6em;
      line-height: 8rem;
      letter-spacing: 0.05em;
    }
    p {
      font-family: "Oswald";
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 3.6rem;
    }
  }
  @media (max-width: 768px) {
    width: 100vw;
    height: 40vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    article {
      margin: auto;      
    text-align: center;
      align-items:center;
      display:flex;
      flex-direction:column;
      justify-content:center;
    
    div {
      font-family: "Oswald";
      font-style: normal;
      font-weight: 700;
      font-size: 43px;
      line-height: 14px;
      text-align: center;
      align-items:center;
    }
    p {
      margin-top:20px;
      font-family: "Oswald";
      font-style: normal;
      font-weight: 700;
      font-size: 0.8rem;
      line-height: 1rem;
      width:12rem;
      text-align: center;
      align-items:center;
    }
  }
  }
`;
export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 20vw;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    background-color: #1877f2;
    color: #fff;
    border: none;
    width: 17vw;
    height: 3rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 8px;
    cursor: pointer;
    &:hover {
      background-color: #333;
    }
  }
  input {
    background-color: white;
    color: #9f9f9f;
    border: none;
    width: 17vw;
    height: 5vh;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin: 0.4vh;
    padding-left: 15px;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #fff;
    }
  }
  p {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 100vw;
    input {
      width: 80vw;
    }
    button {
      width: 80vw;
    }
  }
`;
