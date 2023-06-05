import Header from "../../components/Header"
import Search from "../../components/Search"
import Post from "../../components/Post"
import {
  Container,
  Mobile,
  Title,
  UserImage,
  PublishContainer,
  Text,
  Url,
  Description,
  Button,
  PrincipalContainer,
  TrendingContainer,
} from "./style"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { ApiURL } from "../../App"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import UserContext from "../../contexts/UserContext"
import TokenContext from "../../contexts/TokenContext"
import postApi from "../../services/postsApi.js"
import { HashtagLink } from "../hashtag/style.js"

export default function Timeline() {
  const formInitialState = {
    postUrl: "",
    description: "",
  }

  const { token } = useContext(TokenContext)
  const { user } = useContext(UserContext)

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const [posts, setPosts] = useState(null)
  const [formData, setFormData] = useState(formInitialState)
  const [publishing, setPublishing] = useState(false)
  const [trendingHashtags, setTrendingHashtags] = useState([])
  useEffect(() => {
    axios
      .get(`${ApiURL}/posts`, config)
      .then((res) => {
        setPosts(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        toast.error(
          "An error occured while trying to fetch the posts, please refresh the page"
        )
      })

    postApi
      .getTrendingHashtags()
      .then((res) => setTrendingHashtags(res.data))
      .catch((err) => toast.error("Error on loading trending hashtags"))
  }, [])

  if (posts === null) {
    return (
      <PrincipalContainer>
        <ToastContainer />
        <Container>
          <Header />
          <Mobile>
            <Search token={token} />
          </Mobile>
          <Title>Loading...</Title>
        </Container>
      </PrincipalContainer>
    )
  }

  function updatePostsList() {
    axios
      .get(`${ApiURL}/posts`, config)
      .then((res) => {
        setPosts(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        toast.error(err.response.data.error)
      })
  }
  function handleForm(e) {
    e.preventDefault()
    setPublishing(true)
    if (formData.postUrl === "") {
      toast.error("Preencha o campo da URL!", { autoClose: 1500 })
      return
    }
    const body = {
      description: formData.description,
      postUrl: formData.postUrl,
    }
    axios
      .post(`${ApiURL}/users/${user.id}/posts`, body, config)
      .then((res) => {
        setFormData(formInitialState)
        toast("Post criado com sucesso!", { autoClose: 1500 })
        setPublishing(false)
        updatePostsList()
      })
      .catch((err) => {
        console.log(err)
        toast.error("Houve um erro ao publicar seu link!")
        setPublishing(false)
      })
  }

  return (
    <PrincipalContainer>
      <ToastContainer />
      <Container>
        <Header />
        <Mobile>
          <Search token={token} />
        </Mobile>
        <Title>timeline</Title>
        <PublishContainer onSubmit={handleForm}>
          <UserImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYZGRgYGhoYGRoYGhgYGBgZHBgaGRoaGBwcIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAACBQEGBwj/xAA8EAABAwIEBAUCBQMCBQUAAAABAAIRAyEEEjFBBVFhcSKBkaHwscEGEzLR4UJS8QeSFGJywtIjJFOisv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACQRAAMBAAICAgIDAQEAAAAAAAABAhEDMRIhQVEiYRMycQQz/9oADAMBAAIRAxEAPwD6hTKYa5JscjteudHQxrMpmS/5i5nTaLgyXKmdBL1UvW02DGdXDkoHqwehpsG8ymZLfmKfmI6DBiUN7kP8xVc9DQpFi5EzW7ITCq4t8NPoini0Oa8Mp7sxJO5UhUaESVzdnX0WDYV2Mm6qHK4M/Pkp0B6VLIsFWnMo7kF4/eyZrAJlarL6KrAjuMgFCFuiDXsZP0DMc0N7Re5siVEOoUlDIAI3QnsnRFI6KrmnRIEA9qDUbvCacEPIhgdFTT+fNlx1OR2TT2eyHk+DutgPIphhleD2jpcHy0K0MO7MJNoeQZ6ggewSTRe/r2sncCwOY8bmxHXn7fVWj6JX9lMpaXdIA+fNFHXOs6/ZWrXEncX7gfvdCYfDppbl0/dMxDQoPFp6Bd4i3K0XG6Bhn+6PxJkBs9YhB9C/JmEyqq65CwT0TSrByoFYJ0TZbMpmXFVEBbOql6irCBjudWD1RdWMEzKZlRRbTF8ymZVK4s2YNSKFxF1gPNEpFJ48+KOi1PJHhbQu0o0ITUZolQR0Mkj4FM1t/oplXWtlOgHC+NFzOiCkqvYmxm1HRoqHsrsFlwsWZkBfHIoFR3T3TL2IT2KdDJoW8l0K5YqPakwOlXBVhdc6FUuWMCdqVwj588leVQi6IDjL/wA+6aw0hpO5v30n7pI/RFY/+km0mO+h+g9E8vBaWjUSSP7hmHQxDvcFDp6ER8sB9Sq4eqc5b/1Ed407a+yqx8OgcveLfYp0ybQ5RiTG0afOq2q7A+nECYtIseh5d1gUXDN810+y9DQqANF9tESdI83XbB/Tl5iZ9JQk/wAQpkuLtRPKI/hIpRjeBVgVRdhOKWzLmZchchYUtK5K5CkLDHZXQVyF2EDHZUlchSETHZUXIXcvRAwSgk8b+s+Sew6Txw8fktS/Ebjf5AGozUOmFC8A31+aqaRbQ8LvP7LjCrOaPRUSBpaeapElCL4Vi6y3kbAobshvKq2qUJ75KDoyl6Xc6wQ6iKG2j6oZuAEGg6BJQ3O2Va1VouSPUH6IbsS2fC4HzFrTvHsUjTDqLkSlnAzZWJkTmEiTYyPNU/Nnv1SNDJlXPO/ku5l2oRvqgF/JYxd5vbzQXvVnuQiVmzJBsNUyuza/fb6I73iSeoA8h/BSbPb588k290yByLv2PzmqS/QlL2RjyCAO/v8AZW4pxB2UNaYbvfXa3JCpO1+Rp/Cz8W7O4xpHqdLoU/RonaDYLFEvAJcQbXuPdaJWFSfDm+fsiVOIidUvE+w809HtwF1WDVMpXQcxVRWylTKVjFYUVspXcpWMVUVspUylYxVFw9LMeiplTLa7WNu4dUVnyK9+A2QCwXQxcY6b8/orB6dJCeyuVZmOb4/Jazlm439XklpfiU437FXGNyJjT6dPmiBTMm0k9DJG/l6qr6uWTIgfLLIxPHGtJDA4k2hupP1UfJF/Fs3nvLRJmbCASdd+Sz8XjclpE7iYidrm5WHjamJcQ1lF0uBcLjMQNTfQarzVHiWecry0tMOs1zQQYgiAQJRpVmpGlynjZ7xuNzRqVqU7tHZeW4ViyYD2w4ctD2XqKNQQI5JJe9lWijpCF+ZyKJXeCkajoRb9gwIccGmD89EOtxO8XgXm5nQ2F/p6apB2JBdGp7JPE1nudDcrQLuc4aDkBzKCt/BnCfZpU+ICfCy3WwPPYk+qbq1GvEEwNhDoHaR7yszDYau9rnM0aCS54DQYvZoEmywuOcfr4X8vPke2q3OwszaCASc0cwnStrUiVOJeNnpy2Lh08oysjtafZWzztB8iPZebZ+IXiS5oiG3aZHiBIGljY26FNYXjTHEDNDjsbH+VKtXaKTjWpmmXgm5gBR4EFw3s2yWq4tjB4j2HdXZiMxDoJ/tABgfaUBsOmnlu4+I/LBUI3Vq1YD+kzvafohCqHdOh1SsZF6V3AJsU9Ty+hEoOGpj9UxCZrvt6fXT6Kkr0Tp+xfE1wBO5A8iLfWUmGRcIPF62RheNdvsVn4biTngZ0t1rKcc+tHTZ7eV/ovMVMSZN9yvSuqgsJGoB+hXjcy3Guwcr6P0J+Sp+SmoUhdfieb5C35Kn5KahSEfE3kLfkqfkpmFR7wNVsN5Ni72hoSdUk7o9Z83WTjMWGbpXi7OjjhsLUq5dXLD4txCRlbqbDmlsfxQaZlThVMvdnIJO07dVCq8vUnUvGFrPW4KvkpNaTcNE91MNjZdCzakgJKjiYerTWYjkc7rPYioFl48y6y5RxEhVxFSXeSbkf4i8a/IxOK0HuaQ0iY2myzuD8P/JLXfrc3XNvOvZeiqj5slg8TBBB6b+S5l3p1roBxVwqOY9gLXskC4iD5HTtuvMYb8Ptp57wXmXGczjeeUNF16+pk5EnSzf4SOSXENHp91Z8rzNFXFO7gDhWFLXBxIk7RqOvktlxiwQsHSDSSbmI0sN0cFT7RVL2LvcReUtVfzTFU69EnllTCwQpw8EbmD269EWtwXPOZ5MkOIAtbp80UY6CO+i0xiQ8ciAnnPkV6n6OUcQ+nYOzDS4BtEbLzfEeEsqEZhZn6IbOXfwl0xoFt1Xvb5+YjpCTfi3j+lnmf4TvkaWIX+OaetGazBgWa0k/8179dlSrw6m0Q+C95vP0HIdk6/EPdYZW/wDSHO/ZcoYQgknU/wBToLj2GgUXTY6lJBMHw5jfEGi0Cw/daLWbfwR5KmHZFpJ6z9ld97a8tj5QggMXr2sUi5/VNYknc2PPUd1nOKDYUjQwr9QdxPTb3RMT4Z5GJ6SPpslsKLj3TFR0AzuDbyn7Kk9E67M/EUw9pad1hcTYKYa0arV4hVyNBG5ASLOHGoc73Hsp0Wj0dwYy03OdpBJ9CvLr1nFXhlJwHKPWy8pCfjXonyPWfo9RUzKZl26ebhddVMyDUxAHUrbhkmwtWoGiSsypiATcq1WXGT5BDGGnVTptl4lT2K4zF5QvPVGOxNT8tlpu5x0a3n3XrxQCoaMKbh130WXJi9Gbhfw1RptgNzO5m5J5rUZhGMFgBCTrEjc+qVfxB7TH6p2i/qm2Z+BHF18geK1gJXn2Yjxp/iRcfFlMLIxYZkBbIdulb16Mpz0ehw2K6psVcxsvGUqpGr3H2W3wSrJIgxY3laq2cNM49Nt7ENzJFxPkjA7K4HzolmdLIWFIRp6uJ9kKpOggAbD+E45o3Q35ZRcjJgmDkFZWNQGwVstpWzQoQxDolI5yE/XZMpFzI7KTTKYjrGlyM1jh8CVc/Ye2yjaz2iSZjY69gVsFw16DxEHt2VnURFvLVI4PGMeAAR1BWnS7qi9+hehM0ryufl9E04IUJGsBoIt80Go+EylcS5BoG+xeq+bpFyam6C5iRhQ1hBcfOyu5l42uPKP8rmDH0RarVWf6k32ZuQT4hKPUIywBqqgy4+o7oeMxLabHPeYDQSkwppgfiF5hrAOp+yw4ROC8efVqPLxnYfDlPLaORTmMwTmOhslpAcD0PPqqKlPpiuHX5I+6SpKo94GqVqVybCwXVVJHBMthX19h5lUc4C6AXE2arNpc7nqk3SylIHUxcbEqjeICYgjyKYZQm5R/ygslQXUr4Fm4wc0N+NHNNvppSsy2izbQZ8WBdimu5JeAHZttCk8ZgsxhhLCbyDb0Wc/C4lmha8d8p9Db3UvL5aOiZX2eieGkSDIXm8RQbVrNYLZjBIQ342tEOZl7m/st38J4AZTVeJcT4Sdh0WW1SwnbmZf2aWG4DQYB4ATzN0XH4doYcrQIg2Wgl8ePA7sVdysZyTT8kYrXIjXpRrlH1IC5k8O87iMUGzos9lR9V3h0GpP0Co9he6BzuVqUKWQANGnUX6ystp6N6R1tON0yKfh5b+SrGhUqYnQf5ifZUnF2BtvoRe2LHzSrmFO4mruFn1sXF5gXta6m8HdBqOFAubd0HHsaGOOwBKQq8Qe/9Bgacz81RGMe5gzkkCCR3HvdL2Dy+zHwbHC5tv2XosHinCJuln4YNIGs2Gt5Ej6JyjhuV9GnpsD6kBFSzOpHRWkT7oTqm6q/DFumsSR05j5ugF3NCk0KmmGNZK1nyruQKoKVhKDVXDVVjUUhKYNhm38kav4tNZ+wQ6AV4IM7QI91WeiVdmXjHwQZ0nzXgvx5xVzstNtm6u6nkei93xVli7YfdfNuL0jWqZQCbzbktDyjWtnEN/hbCAUsxFySfLZe1wWKysAgW07LA4Y0NAYRltA5ea0Q+LKPI26bO7imfBT9H1CpUm5UYwnXRcYArmpGi60vlnl/4GAAQ3Yho1KE4k6qj+HsdrPkSm1/BsXyFPEGcwuf8e3mPVKs4NSa7NlJP/MSR6aJh1ADQALeVfIcn4LHGNOknsCl6uLaBeR3BXWsaBc3QcY9uUjWxHqhVNLR5lHHPa6IPZUL+cdx+y87w7h2IaSA8FskiQZA2GqPiKdRs5zA6JPKs3CnlO5pTHPD6mVvb1K9rgGNYxrARYBfM8TVLWl3WyUbxKo0hzXuB7lJPK5+AXxfyfOH2FAxglh7LC/C34gOIGVwh7RqN+q9BUEgrqmlU6jiqXFYzzTUtiWpvIQTyzFcrskea5KXwd0s5w6jcX1Ww7DT6z/Hzks7AESCdj8Ker4sNsdb684/yrceePsnbfl6OlgjrP2KUxXDy4EsMd90q/jDWugG6sziM7eqLc0ZTS9oVxGBe1uZxaB3N4E2WVjMGXPIJuP0jSbAy3nY7L0letmaAYIFwCTtEfRZOPqtMAtBiI8rhJUpDyqYkMO1sOFi60dNxr2+aPhjXMaBYwAByAkSeUg+qRdiYvYIbsa6wb5Rr5JFX6Gcfs23loDbAuMfUa/Por5W5Rlj+q2nMeWrvReZxmNqMcxha7M+coINw0CT2FvVY1T8ZllQsdTeXNcWQ0CS7QtAlPLb+CbSXyfQc5L4iQAAdiZkfTJ5kJXE04j7W3IuNtEHBVHOEmRLbg6mSQG25ZiVoHxZQf7QDe4FiZ8vc9Fn+QF+LFG07fdK1xdaT25QB5ee8+f0WbiAZ0Kk1hWXpSi3/CsVdrIA6qNYT2mChgQtEWBPNEe7XvK6GkAtOxjvOnzol6p9fuqdIl2xHjmJyYZ5i7gGjqTa3M6LCwHCvyh4rvN3dCbx5LbGHFeoCR4KXjfyLx+kD6x2XHiTJ3SV0V4+/wDBSthGvF7HYrNP5jPDy07LccupEyu4ezhXaw6ormrheF14cGlc4RW1QkMTi2tXmsZ+L2McWtBcRrER6pXaQ6h0ewqVOqBUxTea8Bi/xVVf+lob7lThHH3Ui9xJJcLTeD9lN8vsrPE8Pesc5xyta4mJuIt3KueEOeWl7rZgcrel7nyQvwVjXV6LnuMkvInoGtt7p3jNUsOFgkB2Ia10bg06lj0mPZXmVUqmcnJyUqcjjMG1osFhcboeEr050WPxKnLSnqVgkU9PmnF2xDUjSw7nuDWAucTAAXosfw19bEZGDQCTsJ5r13BOBsw7dJedXfsuVcTp/o7K5lM/sS/CnADhwXv/AFuGg0A5L0TguqSuuZUrEcVU6esysRTJfpaEu+kR2Oi08Yy0pZxBE+g3U6nS8X6BUWZQTvt0QMZTzkTPfROgwJQY3+38JcxYOnr0+cYngr6WPovc97qJeMwzOiDIEjSASJX0mpwem7KWkgSTY7HTX5ZZ/EsMHg2SuHxFRgAY7TRp07LJroaode5eGhS4A5z3gv8AAMuS3ivJdmvB/p91xv4cmpDnnIGk2ADpkey7heJYhpJcwOmN4i0Ij+J1ZnI0WjXsdU3jIvjzL1qOv/DtIOY7xeFwmSSHA2gj0VuJ4WgwMqOAb+W8EGBo4hhHa4PksvG8QrOaWkhoP9sg67HbRJue5/63Fxnc/bRDZXSD/Db90w34mxbC6kWAOcwukyPCCIN+8LG4TwRraj67/FUe5zpOgncDZajMO0bApljTPzokqvoZRM9HcPSOdtgRvI6g/O6LWJlzr5S0G43ve2usdjyXBmhtvLvaZ20sjYogUyRBEXAgkEcr6i/0WlehK7ONxIe0P0j9U7c776z5ocyCY3/+0QZH7JRxLGtAgzrGjmuzTHXRNQHRH6f4IJ9p8kQEdTABI2APcECfTxe6s9jRpbXzBgmOiK8iHW1bPSHOv7z6pZz4BB2ETzJsI7Qh44Hy0699p9ff+Vj8SxWRpi7jAa3mSQPRGx2ODGgvMa/uifh3hn5lV1aoLMBDQ64aTc+eWP8Acsp1gbSQtVpnD0Gta7PnOZ/PWT7pdlQOEhc4vWIql7f0Hw5dgPl0kfB42XYdRyULe0d3HGSvs0Wu5rsoFOoHCR8KIlM0e0xOIOywMdxR7Nwj8T4gxoN/ReP4njC+QLD6q1179HNEfYHiXFX1CZccvIWlZbG3Ku7UK9BkpBwlOnKs+mjMYihqDQyeHvP9Mj/7Zw5VHf8A5avWOpgxIBggiQDBGhHIrx3+mroZXZye13+5sf8AavZuMA+v3Xbxf0R5vN/6MsVnYpuvYrSIQKtCVRrScvDOwFINYCBciSeaaXDSywNtlEEFnVFxRYxHtkQs6uwtMDQ/JWiqVKcrNaGaxiBIaQB2tsiPp+vrKG5gBiDHkmWkRpePIKeF1X0IObKC/BTeE48fNkQVCQBHtc9EnitK+TXQixhaOiBUfFitgEAEkevPZLVILTYSJiRvpHZFp/ZlevoyXUC4TC43BuiQLdLrSrOAbIGtptEn/M+qpRflEG+bYjRw1i+90jlb7Y3m8FGUdrT01voQOX0XCwCYPX6W6XRHtkiD6xa0a9unJdLIIOYxq52ntrGqGG0s2HWNjqI/SRew9YSuIeA68CYBgESDzOjtd+aO+qCAf6rtcRod8w9UnXAFiJzENluxO9+cG/TRO/SJnH04AvvrpF9h6WRXeEeHRxO1wLO/8kjWxMtgySIZzIh23mIR2uIaDIBNrX0zR2sgjMaq1byNyZ5WE/f2WXxLiDKTS539ItfUxH3PoleL8XZTbJdDTJPOZB+4XksG5+PrigJyEy9wuQyZN9p0806Qjo9FwKg/Fu/4io3/ANJjopt/+SpJaD2kge69bxV4oUm0WmXOu885MuPmfZP4aiyk0BoDadBto0zZduzT6u6Ly+Prl73PO59BsEOWvCcXbG4I8619IC5oNis+pTdSMtu06g/PdPBQidfgXKehNYIOGWHsu06jkrVMeAYDo+fB5IeJcaALhdptB2P8fssynww1BmD4B2Jur8PFq1nN/wBPL0kz1fESDNl5vHBRRRfY89Gc25PRO4OmooiA0BRVXshdUQYUeo/06qxVrN/ua13+0kf94XvntkEc1xRdnD/U87/o/uzrDIBV1FFYiAxAslZUUSPsZdEUUUWCRUfUA1KiiD6HSTMzFcSYDEpqg6WzNtoFvPmoop8dOt0tySpSwo8fNyqXsdPnNcUQfY89ELh4pJMe6CxxJIJvy+6iizGKufpaY+W66oNV4PawF5Mk2n3UUSMZFXyRMwCIudCIHmST7K+YksPIX6k29P2UUWXYr6FsaxjXTBF9Bfr66iyDi6uUA2cw3Ox18LvKyiif7Jmc94MEGPF5mSHff3S/E+Ita3WNR5huvzkoohPYGfNuK491d83y/wBI5BfU/wAE8OZh8OCPDXqQb7k/pB6AXPmuKKySwi29H+L4yAKLTYGX9Xm9++vmsh71FFwcjbp6epxSlKw40yidzAFyeQG6iiaFrWh5HieGXXz16jabGy51g3YNGpd236rO4gS15Y1tm+HTcaqKLt5n44kedwLybbP/2Q==" />
          <Text>What are you going to share today?</Text>
          <Url
            placeholder="http:// ..."
            disabled={publishing}
            id="postUrl"
            value={formData.postUrl}
            onChange={(e) =>
              setFormData({ ...formData, postUrl: e.target.value })
            }
          />
          <Description
            placeholder="Awesome article about #javascript"
            disabled={publishing}
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <Button disabled={publishing}>
            {publishing ? "Publishing..." : "Publish"}
          </Button>
        </PublishContainer>

        <Post posts={posts} />
      </Container>
      <TrendingContainer>
        <div>trending</div>
        {trendingHashtags.map((h) => (
          <HashtagLink to={`/hashtag/${h.name}`}># {h.name}</HashtagLink>
        ))}
      </TrendingContainer>
    </PrincipalContainer>
  )
}
