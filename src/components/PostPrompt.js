import StyledPostPrompt from "../styles/StyledPostPrompt";
import StyledButton from "../styles/StyledButton";

const PostPrompt = () => {
  return (
    <StyledPostPrompt>
      <section>
        <input
          placeholder="What's on your mind, Mike?"
          type="text"
          autoFocus
        ></input>
        <StyledButton>Make Post</StyledButton>
      </section>
      <div>
        <StyledButton>Add Photo</StyledButton>
      </div>
    </StyledPostPrompt>
  );
};

export default PostPrompt;
