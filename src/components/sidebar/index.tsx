import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { ListChecksIcon } from '@phosphor-icons/react/dist/ssr';
import { ClockClockwiseIcon, SignOutIcon } from '@phosphor-icons/react';
import { useUser } from '../../hooks/UseUser';
import clsx from 'clsx';

export function Sidebar() {
  const { userData, logout } = useUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleLogout() {
    logout();

    navigate('/login');
  }
  return (
    <div className={styles.container}>
      <img src={userData.avatarUrl} alt={userData.name} />
      <div className={styles.links}>
        <Link to="/">
          <ListChecksIcon className={clsx(pathname === '/' && styles.active)} />
        </Link>
        <Link to="/focus">
          <ClockClockwiseIcon
            className={clsx(pathname === '/focus' && styles.active)}
          />
        </Link>
      </div>
      <SignOutIcon onClick={handleLogout} className={styles.signout} />
    </div>
  );
}
