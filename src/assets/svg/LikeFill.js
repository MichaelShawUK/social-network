const LikeFill = ({ handleLike }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="32"
      viewBox="0 -960 960 960"
      width="32"
      fill="#f9a826"
      onClick={() => handleLike()}
    >
      <path d="M721-120H254v-512l278-288 33 26q11 8 14.5 18t3.5 23v10l-45 211h322q23 0 41.5 18.5T920-572v82q0 11-2.5 25.5T910-439L794-171q-9 21-29.5 36T721-120ZM194-632v512H80v-512h114Z" />
    </svg>
  );
};

export default LikeFill;
