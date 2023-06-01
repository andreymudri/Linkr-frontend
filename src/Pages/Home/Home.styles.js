import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
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
`;
