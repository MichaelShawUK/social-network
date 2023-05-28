import StyledButton from "../styles/StyledButton";
import StyledFriendRequest from "../styles/StyledFriendRequest";

const FriendRequest = ({ user }) => {
  const friendIds = user.friends.map((friend) => friend._id);
  const isFriend = friendIds.includes(localStorage.getItem("userId"));

  return (
    <StyledFriendRequest>
      <img src={user.avatar} alt=""></img>
      <div className="name">{`${user.firstName} ${user.lastName}`}</div>
      <form>
        {isFriend ? (
          <StyledButton>Unfriend</StyledButton>
        ) : (
          <StyledButton>Friend Request</StyledButton>
        )}
      </form>
    </StyledFriendRequest>
  );
};

export default FriendRequest;
