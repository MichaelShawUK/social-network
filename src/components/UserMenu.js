import StyledUserMenu from "../styles/StyledUserMenu";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <StyledUserMenu>
      <Link to="/profile">
        <div className="link">Profile</div>
      </Link>
      <Link to="/people">
        <div className="link">People</div>
      </Link>
      <Link to="/logout">
        <div className="link">Logout</div>
      </Link>
    </StyledUserMenu>
  );
};

export default UserMenu;
