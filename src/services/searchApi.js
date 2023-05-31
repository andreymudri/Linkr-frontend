import axios from "axios";

function getSearch(searchValue) {
  const promise = axios.get(
    `${process.env.REACT_APP_BASE_URL}/search/query?searchValue=${searchValue}`
  );
  return promise;
}

const searchApi = { getSearch };

export default searchApi;
