import StyledPostFooter from "../styles/StyledPostFooter";
import LikeFill from "../assets/svg/LikeFill";
import LikeOutline from "../assets/svg/LikeOutline";
import CommentFill from "../assets/svg/CommentFill";
import axios from "axios";
import { database } from "../data/constants";

const PostFooter = ({
  showComments,
  setShowComments,
  post,
  update,
  setUpdate,
  setIsLoading,
}) => {
  const liked = post.likes.includes(localStorage.getItem("userId"));

  async function handleLike() {
    setIsLoading(true);

    await axios({
      method: "POST",
      url: `${database}/like`,
      headers: { Authorization: `Bearer ${localStorage.token}` },
      data: { post: post._id },
    });
    setIsLoading(false);
    setUpdate(!update);
  }

  return (
    <StyledPostFooter>
      {liked ? (
        <LikeFill handleLike={handleLike} />
      ) : (
        <LikeOutline handleLike={handleLike} />
      )}
      <CommentFill
        showComments={showComments}
        setShowComments={setShowComments}
      />
    </StyledPostFooter>
  );
};

export default PostFooter;
