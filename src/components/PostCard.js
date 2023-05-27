import StyledPostCard from "../styles/StyledPostCard";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import CommentSection from "./CommentSection";
import { useState } from "react";

const PostCard = ({ post, update, setUpdate }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <StyledPostCard>
      <PostHeader post={post} />
      {post.text && <div className="post-text">{post.text}</div>}
      {post.image && (
        <div className="post-image-container">
          <img src={post.image} alt="" className="post-image"></img>
        </div>
      )}
      <PostFooter
        showComments={showComments}
        setShowComments={setShowComments}
        post={post}
        update={update}
        setUpdate={setUpdate}
      />
      {showComments && <CommentSection postId={post._id} />}
    </StyledPostCard>
  );
};

export default PostCard;
