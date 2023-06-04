import axios from "axios";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function getUserById(id, token) {
  const promise = axios.get(
    `${process.env.REACT_APP_API_URL}/user/${id}`,
    createConfig(token)
  );
  return promise;
}

const userApi = { getUserById };

export default userApi;
