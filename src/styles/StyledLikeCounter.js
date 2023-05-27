import { styled } from "styled-components";

const StyledLikeCounter = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .counter {
    background-color: ${(props) => props.theme.fg};
    color: ${(props) => props.theme.bg};
    border-radius: 50%;
    height: 22px;
    width: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-weight: bold;
    position: absolute;
    bottom: 10px;
    left: 20px;
    opacity: 0.8;
  }

  @media (max-width: 700px) {
    svg {
      height: 26px;
      width: 26px;
    }

    .counter {
      height: 18px;
      width: 18px;
      font-size: 9px;
      bottom: 14px;
      left: 16px;
    }
  }
`;

export default StyledLikeCounter;
