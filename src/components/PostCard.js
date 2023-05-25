import StyledPostCard from "../styles/StyledPostCard";
import CommentForm from "./CommentForm";
import PostHeader from "./PostHeader";
import Comment from "./Comment";
import PostFooter from "./PostFooter";

const PostCard = () => {
  return (
    <StyledPostCard>
      <PostHeader />
      <div className="post-text">
        Morbi id facilisis arcu, nec aliquet enim. Aenean faucibus diam sit amet
        eros molestie malesuada. Vestibulum mollis sem at mauris tincidunt
        vestibulum id vitae ex.
      </div>
      <div className="post-image-container">
        <img
          src="https://i2.wp.com/photornia.com/wp-content/uploads/2019/06/DSC_3106.jpg?fit=618%2C927&ssl=1"
          alt=""
          className="post-image"
        ></img>
      </div>
      <PostFooter />
      <CommentForm />
      <Comment />
      <Comment />
    </StyledPostCard>
  );
};

export default PostCard;
