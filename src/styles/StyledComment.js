import { styled } from "styled-components";

const StyledComment = styled.div`
  > header {
    margin-bottom: 0.5rem;
  }
  .author {
    font-weight: bold;
  }
  .time-since {
    font-style: italic;
  }

  font-size: 14px;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.accent};
`;

export default StyledComment;
