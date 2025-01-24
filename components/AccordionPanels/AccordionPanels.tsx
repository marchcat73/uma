'use client';
import React, { useState } from 'react';
import { IconButton, Typography, Menu } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconMenu } from '@/components';
import styles from './AccordionPanels.module.css';

const AccordionPanels = ({ items }: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {items.map((item: any) => (
        <div className={styles.panel} key={item.id}>
          <Typography variant="subtitle1">
            {`${item.width}x${item.height} - ${items.length} шт.`}
          </Typography>
          <IconButton
            aria-label="more"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            className={styles.menu}
            sx={{ width: 220, maxWidth: '100%' }}
            style={{ paddingTop: '0px' }}
          >
            <IconMenu anchorEl={anchorEl} id={item.id} onClose={handleClose} />
          </Menu>
        </div>
      ))}
    </>
  );
};

export default AccordionPanels;
