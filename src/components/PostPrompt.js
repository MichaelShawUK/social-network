import StyledPostPrompt from "../styles/StyledPostPrompt";
import StyledButton from "../styles/StyledButton";

const PostPrompt = () => {
  const firstName = localStorage.getItem("firstName");

  return (
    <StyledPostPrompt>
      <form>
        <input
          placeholder={`What's on your mind, ${firstName}?`}
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
