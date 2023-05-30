import { ContainerSearch, SearchIcon } from "./style";

export default function Search() {
  return (
    <ContainerSearch>
      <input placeholder="Search for people" />
      <SearchIcon />
    </ContainerSearch>
  );
}
