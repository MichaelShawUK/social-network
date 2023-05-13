import ThemeSlider from "./ThemeSlider";
import AvatarNav from "./AvatarNav";
import StyledNav from "../styles/StyledNav";

const Nav = ({ setTheme }) => {
  return (
    <StyledNav>
      <ThemeSlider setTheme={setTheme} />
      <AvatarNav />
    </StyledNav>
  );
};

export default Nav;
