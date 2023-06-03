import StyledPostHeader from "../styles/StyledPostHeader";
import getRelativeTime from "../utils/getRelativeTime";
import LikeCounter from "./LikeCounter";
import { Link } from "react-router-dom";

const PostHeader = ({ post }) => {
  return (
    <StyledPostHeader>
      <Link to={`/profile/${post.author._id}`}>
        <img className="avatar" src={post.author.avatar} alt=""></img>
      </Link>
      <div className="text-header">
        <Link to={`/profile/${post.author._id}`}>
          <div className="author">
            {`${post.author.firstName} ${post.author.lastName}`}
          </div>
        </Link>

        <div className="time-since">{getRelativeTime(post.createdAt)}</div>
      </div>
      {post.likes.length > 0 && <LikeCounter post={post} />}
    </StyledPostHeader>
  );
};

export default PostHeader;
