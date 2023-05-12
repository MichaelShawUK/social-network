import StyledToggleSwitch from "../styles/StyledToggleSwitch";
import { lightTheme, darkTheme } from "../styles/themes";

const ToggleSwitch = ({ setTheme }) => {
  function handleTheme(e) {
    if (e.target.checked) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }

  return (
    <StyledToggleSwitch>
      <input type="checkbox" onChange={handleTheme}></input>
      <div></div>
    </StyledToggleSwitch>
  );
};

export default ToggleSwitch;
