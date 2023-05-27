import StyledPostFooter from "../styles/StyledPostFooter";
import LikeFill from "../assets/svg/LikeFill";
import LikeOutline from "../assets/svg/LikeOutline";
import CommentIcon from "../assets/svg/CommentIcon";
import { useState } from "react";

const PostFooter = ({ showComments, setShowComments }) => {
  const [liked, setLiked] = useState(false);

  return (
    <StyledPostFooter>
      {liked ? (
        <LikeFill setLiked={setLiked} />
      ) : (
        <LikeOutline setLiked={setLiked} />
      )}
      <CommentIcon
        showComments={showComments}
        setShowComments={setShowComments}
      />
    </StyledPostFooter>
  );
};

export default PostFooter;
