'use client';
import React from 'react';
import { Button, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import styles from './VirtualKeyboard.module.css';

const VirtualKeyboard = ({ inputValue, setInputValue, onClose }: any) => {
  const handleKeyPress = (digit: any) => {
    setInputValue(inputValue + digit);
  };

  const handleBackspace = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  return (
    <Paper elevation={3} className={styles.container}>
      <Button
        variant="contained"
        onClick={() => handleKeyPress('1')}
        className={styles.numberButton}
      >
        1
      </Button>
      <Button
        variant="contained"
        onClick={() => handleKeyPress('2')}
        className={styles.numberButton}
      >
        2
      </Button>
      <Button
        variant="contained"
        onClick={() => handleKeyPress('3')}
        className={styles.numberButton}
      >
        3
      </Button>
      <Button
        variant="contained"
        onClick={() => handleKeyPress('4')}
        className={styles.numberButton}
      >
        4
      </Button>
      <Button
        variant="contained"
        onClick={() => handleKeyPress('5')}
        className={styles.numberButton}
      >
        5
      </Button>
      <Button
        variant="contained"
        onClick={() => handleKeyPress('6')}
        className={styles.numberButton}
      >
        6
      </Button>
      <Button
        variant="contained"
        onClick={() => handleKeyPress('7')}
        className={styles.numberButton}
      >
        7
      </Button>
      <Button
        variant="contained"
        onClick={() => handleKeyPress('8')}
        className={styles.numberButton}
      >
        8
      </Button>
      <Button
        variant="contained"
        onClick={() => handleKeyPress('9')}
        className={styles.numberButton}
      >
        9
      </Button>
      <Button
        variant="contained"
        onClick={() => handleKeyPress('0')}
        className={styles.numberButton}
      >
        0
      </Button>
      <Button
        variant="contained"
        onClick={handleBackspace}
        className={styles.backButton}
      >
        Backspace
      </Button>
      <Button
        onClick={() => onClose(false)}
        variant="outlined"
        style={{ width: '100%' }}
      >
        <CheckIcon /> ПОДТВЕРДИТЬ
      </Button>
    </Paper>
  );
};

export default VirtualKeyboard;
