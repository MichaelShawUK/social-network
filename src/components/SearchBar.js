import StyledSearchBar from "../styles/StyledSearchBar";

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <input type="text" name="q" placeholder="Find People..."></input>
    </StyledSearchBar>
  );
};

export default SearchBar;
