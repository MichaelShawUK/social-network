import StyledSearchBar from "../styles/StyledSearchBar";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ setQuery }) => {
  const navigate = useNavigate();
  return (
    <StyledSearchBar>
      <input
        type="text"
        name="q"
        placeholder="Find People..."
        onSelect={() => {
          navigate("/people");
        }}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      ></input>
    </StyledSearchBar>
  );
};

export default SearchBar;
