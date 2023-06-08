import searchApi from "../../services/searchApi";
import { Container, ContainerSearch, SearchIcon, SearchUsers } from "./style";
import { DebounceInput } from "react-debounce-input";
import { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import followApi from "../../services/followApi.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Search({ token }) {
  const [search, setSearch] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [followStatusMap, setFollowStatusMap] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(UserContext);

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

  const getFollow = async (id) => {
    try {
      const res = await followApi.getFollowButton(id, user.id);
      return res.data.length !== 0;
    } catch (err) {
      toast.error("Could not perform the operation");
      return false;
    }
  };

  useEffect(() => {
    if (search) {
      search.forEach(async (s) => {
        const followStatus = await getFollow(s.id);
        setFollowStatusMap((prevState) => ({
          ...prevState,
          [s.id]: followStatus,
        }));
      });
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

  return (
    <Container disabled={disabled}>
      <ToastContainer />
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
