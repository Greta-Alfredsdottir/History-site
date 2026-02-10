import { NavLink } from "react-router-dom";
import style from "./navbar.module.scss";

export function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/by-date"> By Date</NavLink>
        </li>
        <li>
          <NavLink to="/since">Since</NavLink>
        </li>
        <li>
          <NavLink to="/">Today</NavLink>
        </li>
      </ul>
    </div>
  );
}
