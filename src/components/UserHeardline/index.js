import { Container } from "./style";

export default function UserHeardline({ user }) {
  return (
    <Container key={user && user.id}>
      <img src={user && user.image} alt="profile" />
      <h2>{user && user.username}</h2>
    </Container>
  );
}
