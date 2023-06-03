import ToggleSwitch from "./ToggleSwitch";
import StyledThemeSlider from "../styles/StyledThemeSlider";
import LightMode from "../assets/svg/LightMode";
import DarkMode from "../assets/svg/DarkMode";

const ThemeSlider = ({ setTheme, checked, setChecked }) => {
  return (
    <StyledThemeSlider>
      <LightMode />
      <ToggleSwitch
        setTheme={setTheme}
        checked={checked}
        setChecked={setChecked}
      />
      <DarkMode />
    </StyledThemeSlider>
  );
};

export default ThemeSlider;
