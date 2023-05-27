import StyledPostFooter from "../styles/StyledPostFooter";
import LikeFill from "../assets/svg/LikeFill";
import LikeOutline from "../assets/svg/LikeOutline";
import CommentIcon from "../assets/svg/CommentIcon";
import axios from "axios";
import { database } from "../data/constants";

const PostFooter = ({
  showComments,
  setShowComments,
  post,
  update,
  setUpdate,
}) => {
  const liked = post.likes.includes(localStorage.getItem("userId"));

  async function handleLike() {
    await axios({
      method: "POST",
      url: `${database}/like`,
      headers: { Authorization: `Bearer ${localStorage.token}` },
      data: { post: post._id },
    });

    setUpdate(!update);
  }

  return (
    <StyledPostFooter>
      {liked ? (
        <LikeFill handleLike={handleLike} />
      ) : (
        <LikeOutline handleLike={handleLike} />
      )}
      <CommentIcon
        showComments={showComments}
        setShowComments={setShowComments}
      />
    </StyledPostFooter>
  );
};

export default PostFooter;
