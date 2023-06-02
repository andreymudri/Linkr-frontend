import { useState, useEffect } from "react";
import Search from "../Search";
import { Container, Icon, SubContainer } from "./style";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      {windowWidth >= 768 && <Search />}
      <SubContainer>
        <Icon />
        <img src="" alt="profile" />
      </SubContainer>
    </Container>
  );
}
