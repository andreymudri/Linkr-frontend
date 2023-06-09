import axios from "axios"
import { ApiURL } from "../App.js"

export function getPostsByHashtag(hashtag, config) {
  const promise = axios.get(`${ApiURL}/posts/hashtag/${hashtag}`, config)
  return promise
}

export function getTrendingHashtags() {
  const promise = axios.get(`${ApiURL}/hashtags`)
  return promise
}

export function postLike(id, userId) {
  const promise = axios.post(`${ApiURL}/like/${id}`, { userId: userId })
  return promise
}

export function postDislike(id, userId) {
  const promise = axios.post(`${ApiURL}/dislike/${id}`, { userId })
  return promise
}

export function verifyNewPosts(id, config) {
  const promise = axios.get(`${ApiURL}/posts/newPosts/${id}`, config)
  return promise
}
const postApi = {
  getPostsByHashtag,
  getTrendingHashtags,
  postLike,
  postDislike,
  verifyNewPosts,
}

export default postApi
