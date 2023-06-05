import { useContext, useState } from "react"
import { Content, MainContainer, Sidebar } from "./Home.styles.js"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ApiURL } from "../../App.js"
import UserContext from "../../contexts/UserContext.js"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import TokenContext from "../../contexts/TokenContext.js"

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const { setUser } = useContext(UserContext)
  const { setToken } = useContext(TokenContext)
  const navigate = useNavigate()
  const bodysignIn = {
    email,
    password,
  }

  function signIn(event) {
    event.preventDefault()
    if (email.length < 1) {
      return toast.error("Email não pode estar vazio!")
    }
    if (password.length < 1) {
      return toast.error("Senha não pode estar vazio!")
    }
    setLoading(true)

    axios
      .post(`${ApiURL}/signin`, bodysignIn)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data.token)
        setUser(res.data.user)
        setToken(res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data.user))
        navigate("/timeline")
        setLoading(false)
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setLoading(false)
          console.log(err)
          return toast.error("Email ou senha incorreta!")
        }
      })
  }

  return (
    <MainContainer>
      <ToastContainer />
      <Content>
        <article>
          <div>linkr</div>
          <p>save, share and discover the best links on the web</p>
        </article>
      </Content>
      <Sidebar>
        <form onSubmit={signIn}>
          <input
            placeholder="E-mail"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
            data-test="email"
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            data-test="password"
          />
          <button type="submit" disabled={loading} data-test="login-btn">
            Log In
          </button>
        </form>

        <p
          onClick={() => {
            navigate("/sign-up")
          }}
          data-test="sign-up-link"
        >
          First time? Create an account!
        </p>
      </Sidebar>
    </MainContainer>
  )
}
