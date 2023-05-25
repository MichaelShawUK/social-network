import StyledButton from "../styles/StyledButton";
import StyledFriendRequest from "../styles/StyledFriendRequest";

const FriendRequest = ({ user }) => {
  console.log(user);
  return (
    <StyledFriendRequest>
      <img src={user.avatar} alt=""></img>
      <div className="name">{`${user.firstName} ${user.lastName}`}</div>
      <form>
        <StyledButton>Friend Request</StyledButton>
      </form>
    </StyledFriendRequest>
  );
};

export default FriendRequest;
