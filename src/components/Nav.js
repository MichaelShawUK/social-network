import ThemeSlider from "./ThemeSlider";

const Nav = ({ setTheme }) => {
  return (
    <nav>
      <ThemeSlider setTheme={setTheme} />
    </nav>
  );
};

export default Nav;
