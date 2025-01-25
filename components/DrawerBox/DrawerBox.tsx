'use client';
import React, { useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import { Alert, Button, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { itemsVar } from '@/cache';
import { VirtualKeyboard } from '@/components';
import styles from './DrawerBox.module.css';

const DrawerBox = ({ onClose }: any) => {
  const [width, setWidth] = useState('540');
  const [height, setHeight] = useState('940');
  const [isPerf, setIsPerf] = useState(false);
  const [isCase, setIsCase] = useState<boolean | null>(true);
  const [isBottom, setIsBottom] = useState<boolean | null>(false);
  const [openKeypad, setOpenKeypad] = useState(false);
  const [size, setSize] = useState('width');

  const panels = useReactiveVar(itemsVar);

  const startVirtualKeyboard = (arg: any) => {
    setSize(arg);
    setOpenKeypad(true);
  };

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
    const panel = {
      id: panels.length + 1,
      width,
      height,
      isPerf,
      isCase,
      isBottom,
      openMenu: false,
    };

    const updatePenels = [...panels, panel];
    itemsVar(updatePenels);

    onClose(false);
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
            aria-label="width"
            value={width}
            className={styles.inputText}
            size="small"
            onFocus={() => startVirtualKeyboard('width')}
          />
          <TextField
            id="outlined-height"
            label="Высота в мм."
            aria-label="height"
            value={height}
            className={styles.inputText}
            size="small"
            onFocus={() => startVirtualKeyboard('height')}
          />
        </div>
        <div className={styles.perfBox}>
          <Button
            variant={isPerf ? 'outlined' : 'contained'}
            aria-label="noPerf"
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
            aria-label="isPerf"
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
                aria-label="isCase"
                onClick={() => setIsCase(true)}
                className={styles.inputText}
              >
                ЯЩИК
              </Button>
              <Button
                variant={isCase ? 'outlined' : 'contained'}
                aria-label="noCase"
                onClick={() => setIsCase(false)}
                className={styles.inputText}
              >
                ДВЕРКА
              </Button>
            </div>
            <div className={styles.containerBox}>
              <Button
                variant={isBottom ? 'contained' : 'outlined'}
                aria-label="isBottom"
                onClick={() => setIsBottom(true)}
                className={styles.inputText}
              >
                РУЧКА СНИЗУ
              </Button>
              <Button
                variant={isBottom ? 'outlined' : 'contained'}
                aria-label="noBottom"
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
      {openKeypad && (
        <div className={styles.virt}>
          {size === 'width' ? (
            <VirtualKeyboard
              inputValue={width}
              setInputValue={setWidth}
              onClose={setOpenKeypad}
            />
          ) : (
            <VirtualKeyboard
              inputValue={height}
              setInputValue={setHeight}
              onClose={setOpenKeypad}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DrawerBox;
