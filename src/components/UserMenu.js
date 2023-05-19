import StyledUserMenu from "../styles/StyledUserMenu";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <StyledUserMenu>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>Users</div>
      <div>Logout</div>
    </StyledUserMenu>
  );
};

export default UserMenu;
