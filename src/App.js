import { Routes, Route, useNavigate } from "react-router-dom"
import "normalize.css"
import Home from "./Pages/Home/Home.js"
import Timeline from "./Pages/Timeline/index.js"
import User from "./Pages/User/index.js"
import styled from "styled-components"
import { useEffect, useState } from "react"
import TokenContext from "./contexts/TokenContext.js"
import Signup from "./Pages/Signup/Signup.js"
import UserContext from "./contexts/UserContext.js"
import HashtagPage from "./Pages/hashtag/HashtagPage.js"
import ReactModal from "react-modal"

const ApiURL = process.env.REACT_APP_API_URL
ReactModal.setAppElement("#root")

function App() {
  const lsUser = JSON.parse(localStorage.getItem("user"))
  const lsToken = localStorage.getItem("token")

  const [user, setUser] = useState(lsUser ? lsUser : {})
  const [token, setToken] = useState(lsToken ? lsToken : {})

  const navigate = useNavigate()

  useEffect(() => {
    if (!lsUser || !lsToken) {
      navigate("/")
    }
  }, [])

  return (
    <div className="normalize-css">
      <Body>
        <UserContext.Provider value={{ user, setUser }}>
          <TokenContext.Provider value={{ token, setToken }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
            </Routes>
          </TokenContext.Provider>
        </UserContext.Provider>
      </Body>
    </div>
  )
}

export default App
export { ApiURL }

const Body = styled.div`
  background-color: #333333;
`
