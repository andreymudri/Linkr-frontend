import searchApi from "../../services/searchApi";
import { Container, ContainerSearch, SearchIcon, SearchUsers } from "./style";
import { DebounceInput } from "react-debounce-input";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search({ token }) {
  const [search, setSearch] = useState(null);
  const [disabled, setDisabled] = useState(true);

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

  return (
    <Container disabled={disabled} data-test={"user-search"}>
      <ContainerSearch>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          onChange={handleInputChange}
          placeholder="Search for people"
        />
        <SearchIcon />
      </ContainerSearch>
      {search &&
        search.map((s) => (
          <Link to={`/user/${s.id}`}>
            <SearchUsers key={s.id} disabled={disabled}>
              <img src={s.image} alt={s.username} />
              <h3>{s.username}aaa</h3>
            </SearchUsers>
          </Link>
        ))}
    </Container>
  );
}
