'use client';
import React from 'react';
import styles from './AccordionPanels.module.css';

const AccordionPanels = ({ items }: any) => {
  return (
    <>
      {items.map((item: any) => (
        <div
          className={styles.panel}
        >{`${item.width}x${item.height} - ${items.length} шт.`}</div>
      ))}
    </>
  );
};

export default AccordionPanels;
