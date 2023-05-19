import { styled } from "styled-components";

const StyledThemeSlider = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  > svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: ${(props) => props.theme.fg};
  }
`;

export default StyledThemeSlider;
