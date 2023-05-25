import StyledPostHeader from "../styles/StyledPostHeader";
import getRelativeTime from "../utils/getRelativeTime";

const PostHeader = ({ post }) => {
  return (
    <StyledPostHeader>
      <img src={post.author.avatar} alt=""></img>
      <div>
        <div className="author">
          {`${post.author.firstName} ${post.author.lastName}`}
        </div>
        <div className="time-since">{getRelativeTime(post.createdAt)}</div>
      </div>
    </StyledPostHeader>
  );
};

export default PostHeader;
