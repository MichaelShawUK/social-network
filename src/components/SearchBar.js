import { useNavigate } from "react-router-dom";
import StyledSearchBar from "../styles/StyledSearchBar";

const SearchBar2 = ({ setQuery, query }) => {
  const navigate = useNavigate();

  return (
    <StyledSearchBar
      type="search"
      placeholder="Find People..."
      value={query}
      onSelect={() => navigate("/people")}
      onChange={(e) => setQuery(e.target.value)}
    ></StyledSearchBar>
  );
};

export default SearchBar2;
