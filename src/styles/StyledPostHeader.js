import { styled } from "styled-components";

const StyledPostHeader = styled.header`
  display: grid;
  grid-template-columns: 60px 1fr 32px;
  gap: 1rem;
  height: 60px;
  margin-bottom: 1rem;
  .avatar {
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 6px;
  }
  .text-header {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .author {
    font-weight: bold;
  }
  .time-since {
    font-style: italic;
  }
`;

export default StyledPostHeader;
