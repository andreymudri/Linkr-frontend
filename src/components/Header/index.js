import Search from "../Search";
import { Container, Icon } from "./style";

export default function Header() {
  return (
    <Container>
      <h2>linkr</h2>
      <Search />
      <div>
        <Icon />
        <img src="" alt="profile" />
      </div>
    </Container>
  );
}
