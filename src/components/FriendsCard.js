import StyledFriendsCard from "../styles/StyledFriendsCard";
import { Link } from "react-router-dom";

const FriendsCard = ({ user }) => {
  const isMe = user._id === localStorage.getItem("userId");

  return (
    <StyledFriendsCard>
      <h3>{isMe ? "My" : `${user.firstName}'s`} Friends</h3>
      <div className="friends">
        {user.friends.map((friend) => {
          return (
            <Link to={`/profile/${friend._id}`} key={friend._id}>
              <img key={friend._id} src={friend.avatar} alt=""></img>
            </Link>
          );
        })}
      </div>
    </StyledFriendsCard>
  );
};

export default FriendsCard;
