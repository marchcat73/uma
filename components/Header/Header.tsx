import cn from 'classnames';
import { Button, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <div className={cn(styles.header, className)} {...props}>
      <div className={styles.leftButtonBox}>
        <IconButton color="primary" size="medium" className={styles.leftButton}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <div className={styles.rightButtonBox}>
        <Button color="primary" size="large" className={styles.rightButton}>
          Отправить
        </Button>
      </div>
    </div>
  );
};

export default Header;
