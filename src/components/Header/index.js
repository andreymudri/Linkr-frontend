import { useContext } from "react";
import Search from "../Search";
import { Container, Icon, SubContainer, UserImage, Mobile } from "./style";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";

export default function Header() {
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);

  return (
    <Container>
      <h2>linkr</h2>
      <Mobile>
        <Search token={token} />
      </Mobile>
      <SubContainer>
        <Icon />
        <UserImage src={user.image} />
      </SubContainer>
    </Container>
  );
}
