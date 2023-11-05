import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import useAuth from 'hooks/useAuth';
import style from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={style.wrapper}>
      <p className={style.username}>Welcome, <span className={style.userName}>{user.name}</span>!</p>
      <button className={style.formButton} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
