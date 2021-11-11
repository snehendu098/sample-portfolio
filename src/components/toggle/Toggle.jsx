import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useDispatch, useSelector } from "react-redux";

const Toggle = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  console.log(theme);

  const handleClick = () => {
    dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t" style={{ backgroundColor: theme ? "#fff" : "#222" }}>
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
