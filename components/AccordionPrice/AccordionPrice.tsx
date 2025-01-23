import React from 'react';
import { Typography, TextField, MenuItem } from '@mui/material';
import styles from './AccordionPrice.module.css';

const AccordionPrice = ({ priceData }: any) => {
  const { text, price, materials, articuls } = priceData;
  return (
    <form>
      <Typography variant="subtitle1">
        {text}: {price}
      </Typography>
      <TextField
        id="outlined-select-material"
        select
        label="Материал"
        defaultValue="EvoGloss"
        className={styles.textField}
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
        className={styles.textField}
      >
        {articuls.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
};

export default AccordionPrice;
