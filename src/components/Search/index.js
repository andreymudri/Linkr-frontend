import searchApi from "../../services/searchApi";
import { Container, ContainerSearch, SearchIcon, SearchUsers } from "./style";
import { DebounceInput } from "react-debounce-input";
import { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import followApi from "../../services/followApi.js";

export default function Search({ token }) {
  const [search, setSearch] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [followStatusMap, setFollowStatusMap] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(UserContext);

  function handleInputChange(event) {
    if (event.target.value === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    const searchValue = event.target.value;
    searchApi
      .getSearch(searchValue, token)
      .then((res) => setSearch(res.data))
      .catch();
  }

  async function getFollow(id) {
    try {
      const res = await followApi.getFollowButton(id, user.id);
      return res.data.length !== 0;
    } catch (err) {
      return false;
    }
  }

  useEffect(() => {
    if (search) {
      async function fetchData() {
        const followStatuses = await Promise.all(
          search.map((s) => getFollow(s.id))
        );
        const followStatusMap = search.reduce((map, s, index) => {
          map[s.id] = followStatuses[index];
          return map;
        }, {});
        setFollowStatusMap(followStatusMap);
      }
      fetchData();
    }
    // eslint-disable-next-line
  }, [search]);

  function Page(id) {
    const currentUserId = location.pathname.split("/")[2];
    if (currentUserId !== id) {
      navigate(`/user/${id}`);
    }
    window.location.reload();
  }

  const sortedSearch = search?.sort((a, b) => {
    const followStatusA = followStatusMap[a.id];
    const followStatusB = followStatusMap[b.id];
    if (followStatusA && !followStatusB) {
      return -1;
    }
    if (!followStatusA && followStatusB) {
      return 1;
    }
    return 0;
  });

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
      {sortedSearch &&
        sortedSearch.map((s) => (
          <SearchUsers
            key={s.id}
            disabled={disabled}
            data-test="user-search"
            onClick={() => Page(s.id)}
          >
            <img src={s.image} alt={s.username} />
            <h3>{s.username}</h3>
            {followStatusMap[s.id] && <h4>• following</h4>}
          </SearchUsers>
        ))}
    </Container>
  );
}
