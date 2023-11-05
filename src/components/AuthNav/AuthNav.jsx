import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={style.nav}>
      <NavLink className={(navData) => (navData.isActive ? style.active : style.navLink)} to="/register">
        Register
      </NavLink>
      <NavLink className={(navData) => (navData.isActive ? style.active : style.navLink)} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
