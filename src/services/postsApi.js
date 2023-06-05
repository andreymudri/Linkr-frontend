import axios from "axios"
import { ApiURL } from "../App.js"

export function getPostsByHashtag(hashtag, config) {
  const promise = axios.get(`${ApiURL}/posts/hashtag/${hashtag}`, config)
  return promise
}

const postApi = { getPostsByHashtag }

export default postApi
