import Header from "../../components/Header";
import Search from "../../components/Search";
import { Container, Mobile } from "./style";

export default function Timeline() {
  return (
    <Container>
      <Header />
      <Mobile>
        <Search />
      </Mobile>
    </Container>
  );
}
