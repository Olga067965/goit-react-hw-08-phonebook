import { NavLink } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import style from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={style.nav}>
      <NavLink className={(navData) => (navData.isActive ? style.active : style.navLink)} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
      <NavLink className={(navData) => (navData.isActive ? style.active : style.navLink)}to="/contacts">
          Contacts
      </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
