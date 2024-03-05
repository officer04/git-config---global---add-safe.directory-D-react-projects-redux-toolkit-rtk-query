import { useSelector } from 'react-redux';
import { FaHeart } from 'react-icons/fa';

import styles from './Header.module.css';

const Header = () => {
  const { item } = useSelector(({ favorites }) => favorites);
  return (
    <header className={styles.header}>
      <FaHeart fontSize={18} />
      <span>{item.length}</span>
    </header>
  );
};

export default Header;
