import { styled } from "styled-components";

const StyledThemeSlider = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${(props) => props.theme.fg};
  }
`;

export default StyledThemeSlider;
