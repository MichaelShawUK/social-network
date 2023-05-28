const LikeOutline = ({ handleLike }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="32"
      viewBox="0 -960 960 960"
      width="32"
      fill="#f9a826"
      onClick={() => handleLike()}
    >
      <path d="M716-120H272v-512l278-288 39 31q6 5 9 14t3 22v10l-45 211h299q24 0 42 18t18 42v81.839q0 7.161 1.5 14.661T915-461L789-171q-8.878 21.25-29.595 36.125Q738.689-120 716-120Zm-384-60h397l126-299v-93H482l53-249-203 214v427Zm0-427v427-427Zm-60-25v60H139v392h133v60H79v-512h193Z" />
    </svg>
  );
};

export default LikeOutline;
