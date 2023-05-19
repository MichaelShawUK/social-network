import StyledPeople from "../styles/StyledPeople";
import SearchBar from "./SearchBar";

const People = () => {
  return (
    <>
      <SearchBar />
      <StyledPeople>
        <div className="person">
          <img
            src="https://res.cloudinary.com/dzpobfxwj/image/upload/v1679664663/players/641b8352039c87ae2ba915d9.png"
            alt=""
          ></img>
          <div>Demo User</div>
        </div>
        <div className="person">
          <img
            src="https://res.cloudinary.com/dzpobfxwj/image/upload/v1679664663/players/641b8352039c87ae2ba915d9.png"
            alt=""
          ></img>
          <div>Demo User</div>
        </div>
        <div className="person">
          <img
            src="https://res.cloudinary.com/dzpobfxwj/image/upload/v1679664663/players/641b8352039c87ae2ba915d9.png"
            alt=""
          ></img>
          <div>Demo User</div>
        </div>
      </StyledPeople>
    </>
  );
};

export default People;
