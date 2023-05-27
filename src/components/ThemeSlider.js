import ToggleSwitch from "./ToggleSwitch";
import StyledThemeSlider from "../styles/StyledThemeSlider";
import LightMode from "../assets/svg/LightMode";
import DarkMode from "../assets/svg/DarkMode";

const ThemeSlider = ({ setTheme }) => {
  return (
    <StyledThemeSlider>
      <LightMode />
      <ToggleSwitch setTheme={setTheme} />
      <DarkMode />
    </StyledThemeSlider>
  );
};

export default ThemeSlider;
