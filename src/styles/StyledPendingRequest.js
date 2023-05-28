import { styled } from "styled-components";

const StyledPendingRequest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  .avatar {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 6px;
  }

  .name {
    font-weight: bold;
    font-size: 14px;
  }

  .btn {
    width: 100px;
    height: 30px;
    border: none;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    margin-top: 0.5rem;
  }

  .accept {
    background-color: #2ab12a;

    &:hover {
      background-color: #0e890e;
    }
  }

  .reject {
    background-color: #cf1818;

    &:hover {
      background-color: #bb0000;
    }
  }
`;

export default StyledPendingRequest;
