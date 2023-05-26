import StyledPeople from "../styles/StyledPeople";
import StyledSearchBarCard from "../styles/StyledSearchBarCard";
import SearchBar from "./SearchBar";
import useNavMenu from "../hooks/useNavMenu";
import { useLoaderData, useOutletContext } from "react-router-dom";
import Person from "./Person";

const People = () => {
  useNavMenu();
  const data = useLoaderData();
  const friends = data.user.friends;
  const strangers = data.strangers;

  const [query, setQuery] = useOutletContext();

  const filteredFriends = filterUsers(friends, query);
  const filteredStrangers = filterUsers(strangers, query);

  const totalUsers = [...filteredFriends, ...filteredStrangers];

  return (
    <>
      <StyledSearchBarCard>
        <SearchBar setQuery={setQuery} query={query} />
      </StyledSearchBarCard>
      <StyledPeople>
        {totalUsers.length > 0 ? (
          <>
            {filteredFriends.length > 0 && (
              <>
                <h3>Friends</h3>
                {filteredFriends.map((friend) => {
                  return <Person person={friend} key={friend._id} />;
                })}
              </>
            )}
            {filteredStrangers.length > 0 && (
              <>
                <h3>People</h3>
                {filteredStrangers.map((stranger) => {
                  return <Person person={stranger} key={stranger._id} />;
                })}
              </>
            )}
          </>
        ) : (
          <div>No users found</div>
        )}
      </StyledPeople>
    </>
  );
};

function filterUsers(users, query) {
  return users.filter((user) => {
    const name = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`;
    return name.includes(query);
  });
}

export default People;
