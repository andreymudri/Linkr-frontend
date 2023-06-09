import { useContext } from "react";
import Search from "../Search";
import { Container, Icon, SubContainer, UserImage, Mobile, Menu } from "./style";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { ApiURL } from "../../App.js";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function Header() {
  const { token, setToken } = useContext(TokenContext);
  const { user, setUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const ref = useRef(null);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleLogout() {
    axios.delete(`${ApiURL}/logout`, config)
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user")
        setUser('');
        setToken('');        
        window.location.reload();
      })
  }


useEffect(() => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [ref]);




  return (
    <Container>
      <Link to={`/timeline`}>
        <h2>linkr</h2>
      </Link>
      <Mobile>
        <Search token={token} />
      </Mobile>
      <SubContainer>
        <div ref={ref}>
          <Icon onClick={toggleMenu} />
          {isMenuOpen && (
            <Menu>
              <p onClick={()=>handleLogout()}>Logout</p>
            </Menu>
          )}
        </div>
        <UserImage src={user.image} />
      </SubContainer>
    </Container>
  );
}
