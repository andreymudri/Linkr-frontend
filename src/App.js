import { BrowserRouter, Routes, Route } from "react-router-dom";
import "normalize.css";
import Home from "./Pages/Home/Home.js";
import Timeline from "./Pages/Timeline/index.js";
import User from "./Pages/User/index.js";
import styled from "styled-components";
import UserContext from "./contexts/UserContext.js";
import { useState } from "react";
import TokenContext from "./contexts/TokenContext.js";

/* const ApiURL = process.env.REACT_APP_API_URL; */
const ApiURL = "http://localhost:5000";
function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState({});
  return (
    <div className="normalize-css">
      <Body>
        <UserContext.Provider value={{ user, setUser }}>
        <TokenContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/user/:id" element={<User />} />
            {/*         <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<signin />} />
*/}
          </Routes>
            </BrowserRouter>
            </TokenContext.Provider>
          </UserContext.Provider>          
      </Body>
    </div>
  );
}

export default App;
export { ApiURL };

const Body = styled.div`
  background-color: #333333;
`;
