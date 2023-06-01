import axios from "axios";

function getUserById(id) {
  const promise = axios.get(
    `${process.env.REACT_APP_BASE_URL}/user/${id}`
  );
  return promise;
}

const userApi = { getUserById };

export default userApi;
