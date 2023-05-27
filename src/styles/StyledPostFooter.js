import { styled } from "styled-components";

const StyledPostFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > svg {
    justify-self: center;
    width: 80%;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.hover};
      border-radius: 4px;
    }
  }

  @media (max-width: 700px) {
    > svg {
      height: 24px;
      width: 24px;
    }
  }
`;

export default StyledPostFooter;
