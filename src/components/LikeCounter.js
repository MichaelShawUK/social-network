import StyledLikeCounter from "../styles/StyledLikeCounter";
import Heart from "../assets/svg/Heart";

const LikeCounter = ({ post }) => {
  return (
    <StyledLikeCounter>
      <Heart />
      <div className="counter">{post.likes.length}</div>
    </StyledLikeCounter>
  );
};

export default LikeCounter;
