import StyledPostHeader from "../styles/StyledPostHeader";

const PostHeader = () => {
  return (
    <StyledPostHeader>
      <img
        src="https://res.cloudinary.com/dzpobfxwj/image/upload/v1679653808/samples/people/kitchen-bar.jpg"
        alt=""
      ></img>
      <div>
        <div className="author">Name</div>
        <div className="time-since">Time Posted</div>
      </div>
    </StyledPostHeader>
  );
};

export default PostHeader;
