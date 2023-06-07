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
    { id, userId },
    createConfig(token)
  );
  return promise;
}

function postFollowButton(id, userId, token) {
  const promise = axios.post(
    `${process.env.REACT_APP_API_URL}/follow`,
    { id, userId },
    createConfig(token)
  );
  return promise;
}

const followApi = { getFollowButton, postFollowButton };

export default followApi;
