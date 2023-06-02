import searchApi from "../../services/searchApi";
import { Container, ContainerSearch, SearchIcon, SearchUsers } from "./style";
import { DebounceInput } from "react-debounce-input";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState([{ id:7, image: "", username: "aaa" }]);
  const [disabled, setDisabled] = useState(true);

  const handleInputChange = (event) => {
    if (event.target.value === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    const searchValue = event.target.value;
    searchApi
      .getSearch(searchValue)
      .then((res) => setSearch(res.data))
      .catch((err) => alert(err.response.data));
  };

  return (
    <Container disabled={disabled}>
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
          <SearchUsers key={s.id} disabled={disabled}>
            <img src={s.image} alt={s.username} />
            <h3>{s.username}aaa</h3>
          </SearchUsers>
        ))}
    </Container>
  );
}
