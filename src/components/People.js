import StyledPeople from "../styles/StyledPeople";
import SearchBar from "./SearchBar";
import useNavMenu from "../hooks/useNavMenu";
import { useLoaderData } from "react-router-dom";
import Person from "./Person";

const People = () => {
  useNavMenu();
  const data = useLoaderData();
  const friends = data.user.friends;
  const strangers = data.strangers;

  return (
    <>
      <SearchBar />
      <StyledPeople>
        {friends.length > 0 && (
          <>
            <h3>Friends</h3>
            {friends.map((friend) => {
              return <Person person={friend} key={friend._id} />;
            })}
          </>
        )}
        {strangers.length > 0 && (
          <>
            <h3>People</h3>
            {strangers.map((stranger) => {
              return <Person person={stranger} key={stranger._id} />;
            })}
          </>
        )}
      </StyledPeople>
    </>
  );
};

export default People;
