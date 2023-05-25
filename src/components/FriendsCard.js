import StyledFriendsCard from "../styles/StyledFriendsCard";
import { Link } from "react-router-dom";

const FriendsCard = ({ friends }) => {
  return (
    <StyledFriendsCard>
      <h3>Friends</h3>

      <div className="friends">
        {friends.map((friend) => {
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
