import StyledPostPrompt from "../styles/StyledPostPrompt";
import StyledButton from "../styles/StyledButton";

const PostPrompt = () => {
  const firstName = localStorage.getItem("firstName");

  return (
    <StyledPostPrompt>
      <form>
        <input
          placeholder={`What's on your mind, ${firstName}?`}
          className="textInput"
          type="text"
          name="text"
          autoFocus
        ></input>
        <label htmlFor="image" className="fileLabel">
          Add Photo <span className="camera">&#128248;</span>
        </label>
        <input id="image" name="image" type="file" hidden></input>
        <StyledButton>Post</StyledButton>
      </form>
    </StyledPostPrompt>
  );
};

export default PostPrompt;
