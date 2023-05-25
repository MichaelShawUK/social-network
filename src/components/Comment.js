import StyledComment from "../styles/StyledComment";
import getRelativeTime from "../utils/getRelativeTime";

const Comment = ({ comment }) => {
  const name = `${comment.author.firstName} ${comment.author.lastName}`;

  return (
    <StyledComment>
      <header>
        <div className="author">{name}</div>
        <div className="time-since">{getRelativeTime(comment.createdAt)}</div>
      </header>
      <div>{comment.text}</div>
    </StyledComment>
  );
};

export default Comment;
