'use client';
import React, { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';

import styles from './DrawerBox.module.css';

const DrawerBox = () => {
  const [width, setWidth] = useState('540 мм.');
  const [height, setHeight] = useState('940 мм.');
  const [isPerf, setIsPerf] = useState(false);
  return (
    <div className={styles.drawerBox}>
      <Alert severity="warning" onClose={() => {}}>
        Параметры лицевой стороны
      </Alert>
      <form className={styles.form}>
        <div className={styles.inputBox}>
          <TextField
            id="outlined-width"
            label="Ширина в мм."
            value={width}
            className={styles.inputText}
            onChange={() => {}}
            size="small"
          />
          <TextField
            id="outlined-height"
            label="Высота в мм."
            value={height}
            className={styles.inputText}
            onChange={() => {}}
            size="small"
          />
        </div>
        <div className={styles.perfBox}>
          <Button
            variant={isPerf ? 'outlined' : 'contained'}
            onClick={() => setIsPerf(false)}
            className={styles.inputText}
          >
            БЕЗ ОТВЕРСТИЙ
          </Button>
          <Button
            variant={isPerf ? 'contained' : 'outlined'}
            onClick={() => setIsPerf(true)}
            className={styles.inputText}
          >
            С ОТВЕРСТИЯМИ
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DrawerBox;
