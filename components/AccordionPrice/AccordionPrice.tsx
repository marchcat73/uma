'use client';
import React, { useState } from 'react';
import { Typography, TextField, MenuItem, Button } from '@mui/material';
import styles from './AccordionPrice.module.css';

const AccordionPrice = ({ priceData }: any) => {
  const [material, setMaterial] = useState('');
  const [articul, setArticul] = useState('');
  const { text, price, materials, articuls } = priceData;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(material, articul);
  };

  const handleClear = (e: any) => {
    e.preventDefault();
    setMaterial('');
    setArticul('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="subtitle1">
        {text}: {price}
      </Typography>
      <TextField
        id="outlined-select-material"
        select
        label="Материал"
        defaultValue="EvoGloss"
        value={material}
        className={styles.textField}
        onChange={(option) => setMaterial(option.target.value)}
      >
        {materials.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-articul"
        select
        label="Артикул"
        defaultValue="P001"
        value={articul}
        className={styles.textField}
        onChange={(option) => setArticul(option.target.value)}
      >
        {articuls.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <div className={styles.buttonsBox}>
        <Button
          variant="outlined"
          size="large"
          className={styles.button}
          onClick={handleClear}
        >
          УДАЛИТЬ
        </Button>
        <Button
          variant="contained"
          size="large"
          className={styles.button}
          type="submit"
        >
          СОХРАНИТЬ
        </Button>
      </div>
    </form>
  );
};

export default AccordionPrice;
