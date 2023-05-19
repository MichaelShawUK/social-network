import StyledFriendsCard from "../styles/StyledFriendsCard";

const FriendsCard = ({ friends }) => {
  return (
    <StyledFriendsCard>
      <h3>Friends</h3>
      <div className="friends">
        {friends.map((friend, index) => (
          <img key={index} src={friend} alt=""></img>
        ))}
      </div>
    </StyledFriendsCard>
  );
};

export default FriendsCard;
