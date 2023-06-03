import StyledToggleSwitch from "../styles/StyledToggleSwitch";
import { lightTheme, darkTheme } from "../styles/themes";

const ToggleSwitch = ({ setTheme, checked, setChecked }) => {
  function handleTheme(e) {
    if (e.target.checked) {
      setChecked(true);
      setTheme(darkTheme);
    } else {
      setChecked(false);
      setTheme(lightTheme);
    }
  }

  return (
    <StyledToggleSwitch>
      <input type="checkbox" onChange={handleTheme} checked={checked}></input>
      <div></div>
    </StyledToggleSwitch>
  );
};

export default ToggleSwitch;
