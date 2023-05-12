import avatar from "../assets/images/avatar.png";

const AvatarNav = ({ showMenu, setShowMenu }) => {
  return (
    <img
      src={avatar}
      alt=""
      onClick={() => {
        setShowMenu(!showMenu);
      }}
    ></img>
  );
};

export default AvatarNav;
