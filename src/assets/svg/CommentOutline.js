const CommentOutline = ({ showComments, setShowComments }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="32"
      viewBox="0 -960 960 960"
      width="32"
      fill="#f9a826"
      onClick={() => setShowComments(!showComments)}
    >
      <path d="M240-400h480v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60ZM880-80 720-240H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v740ZM140-300v-520 520Zm606 0 74 80v-600H140v520h606Z" />
    </svg>
  );
};

export default CommentOutline;
