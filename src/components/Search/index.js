import searchApi from "../../services/searchApi";
import { Container, ContainerSearch, SearchIcon, SearchUsers } from "./style";
import { DebounceInput } from "react-debounce-input";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Search({ token }) {
  const [search, setSearch] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (event) => {
    if (event.target.value === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    const searchValue = event.target.value;
    searchApi
      .getSearch(searchValue, token)
      .then((res) => setSearch(res.data))
      .catch((err) => console.log(err.response.data));
  };

  function Page(id) {
    const currentUserId = location.pathname.split("/")[2];
    if (currentUserId !== id) {
      navigate(`/user/${id}`);
    }
    window.location.reload();
  }

  return (
    <Container disabled={disabled}>
      <ContainerSearch>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          onChange={handleInputChange}
          placeholder="Search for people"
          data-test="search"
        />
        <SearchIcon />
      </ContainerSearch>
      {search &&
        search.map((s) => (
          <SearchUsers
            key={s.id}
            disabled={disabled}
            data-test={"user-search"}
            onClick={() => Page(s.id)}
          >
            <img src={s.image} alt={s.username} />
            <h3>{s.username}</h3>
          </SearchUsers>
        ))}
    </Container>
  );
}
