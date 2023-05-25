import StyledFriendsCard from "../styles/StyledFriendsCard";

const FriendsCard = ({ friends }) => {
  return (
    <StyledFriendsCard>
      <h3>Friends</h3>
      <div className="friends">
        {friends.map((friend) => (
          <img key={friend._id} src={friend.avatar} alt=""></img>
        ))}
      </div>
    </StyledFriendsCard>
  );
};

export default FriendsCard;
