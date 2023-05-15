import StyledPostPrompt from "../styles/StyledPostPrompt";
import StyledButton from "../styles/StyledButton";

const PostPrompt = () => {
  return (
    <StyledPostPrompt>
      <form>
        <input
          placeholder="What's on your mind, Mike?"
          type="text"
          autoFocus
        ></input>
        <StyledButton>Make Post</StyledButton>
      </form>
      <div>
        <StyledButton>Add Photo</StyledButton>
      </div>
    </StyledPostPrompt>
  );
};

export default PostPrompt;
