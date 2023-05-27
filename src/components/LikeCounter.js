import StyledLikeCounter from "../styles/StyledLikeCounter";
import Heart from "../assets/svg/Heart";

const LikeCounter = () => {
  return (
    <StyledLikeCounter>
      <Heart />
      <div className="counter">6</div>
    </StyledLikeCounter>
  );
};

export default LikeCounter;
