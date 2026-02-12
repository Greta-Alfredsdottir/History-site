import { NavLink } from "react-router-dom";
import style from "./navbar.module.scss";

export function NavBar() {
  return (
    <div className={style.navStyle}>
      <ul>
        <li>
          <NavLink
            to="/by-date"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            By Date
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Today
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/since"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Since
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
