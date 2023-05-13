import avatar from "../assets/images/avatar.png";
import UserMenu from "./UserMenu";
import { useEffect, useRef } from "react";

const AvatarNav = ({ showMenu, setShowMenu }) => {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setShowMenu]);

  return (
    <div ref={ref}>
      <img
        src={avatar}
        alt=""
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      ></img>
      {showMenu && <UserMenu />}
    </div>
  );
};

export default AvatarNav;
