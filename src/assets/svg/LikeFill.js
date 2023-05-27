const LikeFill = ({ setLiked, handleLike }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      viewBox="0,0,256,256"
      // onClick={() => setLiked(false)}
      onClick={() => handleLike()}
    >
      <g fill="#f9a826" stroke="none">
        <g transform="scale(10.66667,10.66667)">
          <path d="M14.16797,1l-6.58398,6.5957c-0.374,0.375 -0.58398,0.88211 -0.58398,1.41211v9.99219c0,1.105 0.895,2 2,2h8.99219c0.799,0 1.52189,-0.47594 1.83789,-1.21094l3.00781,-7.00195c0.107,-0.249 0.16211,-0.51806 0.16211,-0.78906v-1.99805c0,-1.105 -0.895,-2 -2,-2h-6.35156l0.9375,-4.29687c0.146,-0.67 -0.06374,-1.36956 -0.55274,-1.85156zM1,9v12h4v-12z"></path>
        </g>
      </g>
    </svg>
  );
};

export default LikeFill;
