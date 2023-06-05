import { useContext, useState, useEffect } from "react";
import Search from "../Search";
import { Container, Icon, SubContainer, UserImage } from "./style";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";

export default function Header() {
  const { token } = useContext(TokenContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <h2>linkr</h2>
      {windowWidth >= 768 && <Search token={token} />}
      <SubContainer>
        <Icon />
        <UserImage src={user.image} />
      </SubContainer>
    </Container>
  );
}
