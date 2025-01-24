'use client';
import React from 'react';
import { IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './AccordionPanels.module.css';

const AccordionPanels = ({ items }: any) => {
  return (
    <>
      {items.map((item: any) => (
        <div className={styles.panel}>
          <Typography variant="subtitle1">
            {`${item.width}x${item.height} - ${items.length} шт.`}
          </Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      ))}
    </>
  );
};

export default AccordionPanels;
