import axios from "axios";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function getSearch(searchValue, token) {
  const promise = axios.get(
    `${process.env.REACT_APP_API_URL}/search/query?searchValue=${searchValue}`,
    createConfig(token)
  );
  return promise;
}

const searchApi = { getSearch };

export default searchApi;
