import axios from "axios";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function getFollowButton(id, userId, token) {
  const promise = axios.get(
    `${process.env.REACT_APP_API_URL}/follow`,
    { id: id, userId: userId },
    createConfig(token)
  );
  return promise;
}

function postFollowButton(id, userId, token) {
  const promise = axios.post(
    `${process.env.REACT_APP_API_URL}/follow`,
    { id: id, userId: userId },
    createConfig(token)
  );
  return promise;
}

function deleteFollowButton(id, userId, token) {
  const promise = axios.delete(
    `${process.env.REACT_APP_API_URL}/follow`,
    { id: id, userId: userId },
    createConfig(token)
  );
  return promise;
}

const followApi = { getFollowButton, postFollowButton, deleteFollowButton };

export default followApi;
