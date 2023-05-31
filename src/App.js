import { BrowserRouter, Routes, Route } from "react-router-dom";
import "normalize.css";
import Home from "./Pages/Home.js";
import Timeline from "./Pages/Timeline/index.js";
import User from "./Pages/User/index.js";
import styled from "styled-components";

/* const ApiURL = process.env.REACT_APP_API_URL; */
const ApiURL = 'http://localhost:5000';
function App() {

  return (
    <div className="normalize-css">
      <Body>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} /> 
          <Route path="/user" element={<User />} />
          {/*         <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<signin />} />
*/}
        </Routes>
        </BrowserRouter>
        </Body>
    </div>
  );
}

export default App;
export { ApiURL }

const Body = styled.div`
background-color: #333333;
`