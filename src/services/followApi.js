import axios from "axios";

function getFollowButton(id, userId) {
  const promise = axios.post(`${process.env.REACT_APP_API_URL}/follow/get`, {
    id: id,
    userId: userId,
  });
  return promise;
}

function postFollowButton(id, userId) {
  const promise = axios.post(`${process.env.REACT_APP_API_URL}/follow/post`, {
    id: id,
    userId: userId,
  });
  console.log(promise);
  return promise;
}

function deleteFollowButton(id, userId) {
  const promise = axios.delete(`${process.env.REACT_APP_API_URL}/follow/delete`, {
    id: id,
    userId: userId,
  });
  return promise;
}

const followApi = { getFollowButton, postFollowButton, deleteFollowButton };

export default followApi;
