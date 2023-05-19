import StyledButton from "../styles/StyledButton";
import StyledFriendRequest from "../styles/StyledFriendRequest";

const FriendRequest = () => {
  return (
    <StyledFriendRequest>
      <img
        src="https://res.cloudinary.com/dzpobfxwj/image/upload/v1679664672/players/641b8353039c87ae2ba915f1.png"
        alt=""
      ></img>
      <div className="name">Demo User</div>
      <form>
        <StyledButton>Friend Request</StyledButton>
      </form>
    </StyledFriendRequest>
  );
};

export default FriendRequest;
