'use client';
import React, { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import styles from './DrawerBox.module.css';

const DrawerBox = ({ onClose }: any) => {
  const [width, setWidth] = useState('540 мм.');
  const [height, setHeight] = useState('940 мм.');
  const [isPerf, setIsPerf] = useState(false);
  const [isCase, setIsCase] = useState<boolean | null>(true);
  const [isBottom, setIsBottom] = useState<boolean | null>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(
      width,
      height,
      'с отверстиями: ',
      isPerf,
      'ящик: ',
      isCase,
      'ручка снизу: ',
      isBottom,
    );
  };
  return (
    <div className={styles.drawerBox}>
      <Alert severity="warning" onClose={() => onClose(false)}>
        Параметры лицевой стороны
      </Alert>
      <form className={styles.form} onSubmit={(e: any) => handleSubmit(e)}>
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
            onClick={() => {
              setIsPerf(false);
              setIsCase(null);
              setIsBottom(null);
            }}
            className={styles.inputText}
          >
            БЕЗ ОТВЕРСТИЙ
          </Button>
          <Button
            variant={isPerf ? 'contained' : 'outlined'}
            onClick={() => {
              setIsPerf(true);
              setIsCase(true);
              setIsBottom(false);
            }}
            className={styles.inputText}
          >
            С ОТВЕРСТИЯМИ
          </Button>
        </div>
        {isPerf && (
          <>
            <div className={styles.containerBox}>
              <Button
                variant={isCase ? 'contained' : 'outlined'}
                onClick={() => setIsCase(true)}
                className={styles.inputText}
              >
                ЯЩИК
              </Button>
              <Button
                variant={isCase ? 'outlined' : 'contained'}
                onClick={() => setIsCase(false)}
                className={styles.inputText}
              >
                ДВЕРКА
              </Button>
            </div>
            <div className={styles.containerBox}>
              <Button
                variant={isBottom ? 'contained' : 'outlined'}
                onClick={() => setIsBottom(true)}
                className={styles.inputText}
              >
                РУЧКА СНИЗУ
              </Button>
              <Button
                variant={isBottom ? 'outlined' : 'contained'}
                onClick={() => setIsBottom(false)}
                className={styles.inputText}
              >
                РУЧКА СВЕРХУ
              </Button>
            </div>
          </>
        )}
        <div className={styles.containerBox}>
          <Button variant="contained" className={styles.submit} type="submit">
            <CheckIcon /> ДОБАВИТЬ ПАНЕЛЬ
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DrawerBox;
