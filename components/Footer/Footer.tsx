'use client';
import React, { useState } from 'react';
import cn from 'classnames';
import { Fab, Drawer, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DrawerBox } from '@/components';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

const Footer = ({ className, ...props }: FooterProps) => {
  const [open, setOpen] = useState(false);
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <Fab
        color="primary"
        variant="extended"
        aria-label="add"
        className={styles.fab}
        onClick={() => setOpen(true)}
      >
        <AddIcon />
        Добавить
      </Fab>
      <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
        <Paper elevation={3}>
          <DrawerBox />
        </Paper>
      </Drawer>
    </footer>
  );
};

export default Footer;
