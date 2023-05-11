import { styled } from "styled-components";

const StyledToggleSwitch = styled.label`
  margin: 0.5rem;
  display: inline-block;
  position: relative;
  width: 40px;
  height: 22px;

  > input {
    display: none;
  }

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
    background-color: #999;
    border-radius: 22px;
    outline: 2px solid white;
  }

  > div::before {
    content: "";
    height: 18px;
    width: 18px;
    background-color: ${(props) => props.theme.accent};
    position: absolute;
    bottom: 2px;
    left: 2px;
    border-radius: 50%;
    transition: 0.4s;
  }

  > input:checked + div {
    outline-color: #333;
  }

  > input:checked + div::before {
    transform: translateX(18px);
    background-color: #ededed;
  }
`;

export default StyledToggleSwitch;
