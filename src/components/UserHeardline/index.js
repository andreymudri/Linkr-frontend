import { Container } from "./style";

export default function UserHeardline({ user }) {
  return (
    <Container key={user.id} >
      <img src={user.image} alt="profile" />
      <h2>{user.username}linkr</h2>
    </Container>
  );
}
