import StyledFriendsCard from "../styles/StyledFriendsCard";
import StyledButton from "../styles/StyledButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import arrow from "../assets/images/arrow.png";

const FriendsCard = ({ user }) => {
  const isMe = user._id === localStorage.getItem("userId");

  const [showFriends, setShowFriends] = useState(false);

  return (
    <StyledFriendsCard>
      <header onClick={() => setShowFriends(!showFriends)} className="header">
        <h3>{isMe ? "My" : `${user.firstName}'s`} Friends</h3>
        {user.friends.length > 0 && (
          <img
            src={arrow}
            alt=""
            className={`arrow ${showFriends ? "" : "rotate"}`}
          ></img>
        )}
      </header>
      {user.friends.length > 0 ? (
        <div className={`friends ${showFriends ? "" : "hide"}`}>
          {user.friends.map((friend) => {
            return (
              <Link to={`/profile/${friend._id}`} key={friend._id}>
                <img key={friend._id} src={friend.avatar} alt=""></img>
              </Link>
            );
          })}
        </div>
      ) : (
        <Link to="/people">
          <StyledButton>Find People</StyledButton>
        </Link>
      )}
    </StyledFriendsCard>
  );
};

export default FriendsCard;
