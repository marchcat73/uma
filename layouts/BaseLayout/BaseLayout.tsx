/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames';
import { Header } from '@/components';
import { BaseLayoutProps } from './BaseLayout.props';
import styles from './BaseLayout.module.css';

const BaseLayout = ({ children, className, ...props }: BaseLayoutProps) => {
  return (
    <>
      <div className={cn(styles.baseLayout, className)} {...props}>
        <Header className={cn(styles.header)} />
        <main className={styles.body}>{children}</main>
        {/* <Footer className={styles.footer} /> */}
      </div>
    </>
  );
};

export default BaseLayout;
