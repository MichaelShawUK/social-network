import StyledButton from "../styles/StyledButton";
import StyledCommentForm from "../styles/StyledCommentForm";

const CommentForm = () => {
  return (
    <StyledCommentForm>
      <form>
        <input
          type="text"
          name="comment"
          placeholder="Write a comment..."
        ></input>
        <StyledButton>Comment</StyledButton>
      </form>
    </StyledCommentForm>
  );
};

export default CommentForm;
