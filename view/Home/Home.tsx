'use client';
import { Divider } from '@mui/material';
import {
  AccordionTransition,
  AccordionPrice,
  AccordionPanels,
} from '@/components';
import styles from './Home.module.css';

const Home = ({ priceData, panels }: any) => {
  function groupPanels(panels: any) {
    const result: any = {};
    panels.forEach((panel: any) => {
      const key = `${panel.width}_${panel.height}`;
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(panel);
    });
    return Object.values(result);
  }

  const resGroupPanels = groupPanels(panels);

  return (
    <div className={styles.home}>
      <AccordionTransition
        text="Итого: 12 560р."
        body={<AccordionPrice priceData={priceData} />}
      />
      <Divider />
      {resGroupPanels &&
        resGroupPanels.map((item: any, index: number) => {
          const text = `${item[0].width}x${item[0].height} - ${item.length} шт.`;
          if (item.length > 1) {
            return (
              <AccordionTransition
                key={`${index}`}
                text={text}
                body={<AccordionPanels items={item} />}
              />
            );
          } else {
            return <AccordionPanels items={item} key={`${index}`} />;
          }
        })}
    </div>
  );
};

export default Home;
