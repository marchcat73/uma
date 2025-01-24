'use client';
import React from 'react';
import { useReactiveVar } from '@apollo/client';
import {
  Divider,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Paper,
} from '@mui/material';
import PhotoSizeSelectSmallIcon from '@mui/icons-material/PhotoSizeSelectSmall';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { itemsVar } from '@/cache';
import styles from './IconMenu.module.css';

const IconMenu = ({ id }: any) => {
  const panels = useReactiveVar(itemsVar);

  const handleClose = () => {
    const updatePanels = panels.map((el: any) => {
      el.openMenu = false;

      return { ...el };
    });
    itemsVar([...updatePanels]);
  };
  const updateSize = () => {
    handleClose();
  };

  const updatePerforation = () => {
    handleClose();
  };

  const deletePanel = () => {
    handleClose();
  };
  return (
    <Paper
      elevation={6}
      sx={{ width: 220, maxWidth: '100%' }}
      className={styles.iconMenu}
    >
      <MenuList style={{ paddingTop: '0px' }}>
        <div className={styles.head}>
          <span style={{ fontSize: '14px' }}>Изменить панель</span>
        </div>
        <MenuItem onClick={() => updateSize()}>
          <ListItemIcon>
            <PhotoSizeSelectSmallIcon />
          </ListItemIcon>
          <ListItemText>Размеры</ListItemText>
        </MenuItem>
        <Divider style={{ marginTop: '0px', marginBottom: '0px' }} />
        <MenuItem onClick={() => updatePerforation()}>
          <ListItemIcon>
            <BuildCircleIcon />
          </ListItemIcon>
          <ListItemText>Отверстия</ListItemText>
        </MenuItem>
        <Divider style={{ marginTop: '0px', marginBottom: '0px' }} />
        <MenuItem onClick={() => deletePanel()}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText>Удалить</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default IconMenu;
