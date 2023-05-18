import StyledPostCard from "../styles/StyledPostCard";
import CommentForm from "./CommentForm";
import PostHeader from "./PostHeader";
import Comment from "./Comment";

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
      <footer>
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke=""
          transform="rotate(0)"
        >
          <g id="SVGRepo_iconCarrier">
            <path
              d="M15.9 4.5C15.9 3 14.418 2 13.26 2c-.806 0-.869.612-.993 1.82-.055.53-.121 1.174-.267 1.93-.386 2.002-1.72 4.56-2.996 5.325V17C9 19.25 9.75 20 13 20h3.773c2.176 0 2.703-1.433 2.899-1.964l.013-.036c.114-.306.358-.547.638-.82.31-.306.664-.653.927-1.18.311-.623.27-1.177.233-1.67-.023-.299-.044-.575.017-.83.064-.27.146-.475.225-.671.143-.356.275-.686.275-1.329 0-1.5-.748-2.498-2.315-2.498H15.5S15.9 6 15.9 4.5zM5.5 10A1.5 1.5 0 0 0 4 11.5v7a1.5 1.5 0 0 0 3 0v-7A1.5 1.5 0 0 0 5.5 10z"
              fill="#F9A826"
            />
          </g>
        </svg>
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#F9A826"
              d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.667a1 1 0 0 0-.6.2L3.6 21.8A1 1 0 0 1 2 21V6zm5 0a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H7zm0 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H7z"
            />
          </g>
        </svg>
      </footer>
      <CommentForm />
      <Comment />
      <Comment />
    </StyledPostCard>
  );
};

export default PostCard;
