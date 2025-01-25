'use client';
import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { itemsVar } from '@/cache';
import { IconMenu } from '@/components';
import styles from './AccordionPanels.module.css';

const AccordionPanels = ({ items }: any) => {
  const panels = useReactiveVar(itemsVar);

  const handleClick = (id: any) => {
    const cleared = panels.map((el: any) => {
      el.openMenu = false;

      return { ...el };
    });
    itemsVar([...cleared]);

    const updatePanels = panels.map((el: any) => {
      if (el?.id === id) {
        el.openMenu = true;
      }

      return { ...el };
    });
    itemsVar([...updatePanels]);
  };

  return (
    <>
      {items.map((item: any) => (
        <div className={styles.panel} key={item?.id}>
          <Typography variant="subtitle1">
            {`${item?.width}x${item?.height} - ${items?.length} шт.`}
          </Typography>
          <IconButton
            aria-label="more"
            aria-haspopup="true"
            onClick={() => {
              handleClick(item?.id);
            }}
          >
            <MoreVertIcon />
          </IconButton>

          {item?.openMenu && <IconMenu id={item?.id} />}
        </div>
      ))}
    </>
  );
};

export default AccordionPanels;
