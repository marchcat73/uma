'use client';
import {
  AccordionTransition,
  AccordionPrice,
  AccordionPanels,
} from '@/components';

const Home = ({ priceData, panels }: any) => {
  return (
    <div>
      <AccordionTransition
        text="Итого: 12 560р."
        body={<AccordionPrice priceData={priceData} />}
      />
      {panels &&
        panels.map((p: any) => {
          if (p.children) {
            const text = `${p.width}x${p.height} - ${p.amount} шт.`;
            return (
              <AccordionTransition text={text} body={<AccordionPanels />} />
            );
          } else {
            return <div>panel</div>;
          }
        })}
    </div>
  );
};

export default Home;
