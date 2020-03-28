import React from "react";
import css from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={css.nav}>
      <div>
        <NavLink activeClassName={css.active} to="/profile">
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName={css.active} to="/dialogs">
          Dialogs
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName={css.active} to="/users">
          Users
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName={css.active} to="/news">
          News
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName={css.active} to="/music">
          Music
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName={css.active} to="/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
