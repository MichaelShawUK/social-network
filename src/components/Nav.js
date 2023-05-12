import ThemeSlider from "./ThemeSlider";
import AvatarNav from "./AvatarNav";
import StyledNav from "../styles/StyledNav";
import UserMenu from "./UserMenu";
import { useState } from "react";

const Nav = ({ setTheme }) => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <StyledNav>
      <ThemeSlider setTheme={setTheme} />
      <AvatarNav showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <UserMenu />}
    </StyledNav>
  );
};

export default Nav;
