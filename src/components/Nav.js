import ThemeSlider from "./ThemeSlider";
import AvatarNav from "./AvatarNav";
import StyledNav from "../styles/StyledNav";
import { useState } from "react";

const Nav = ({ setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledNav>
      <ThemeSlider setTheme={setTheme} />
      <AvatarNav showMenu={showMenu} setShowMenu={setShowMenu} />
    </StyledNav>
  );
};

export default Nav;
