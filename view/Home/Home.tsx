'use client';
import {
  AccordionTransition,
  AccordionPrice,
  AccordionPanels,
} from '@/components';

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
    <div>
      <AccordionTransition
        text="Итого: 12 560р."
        body={<AccordionPrice priceData={priceData} />}
      />
      {resGroupPanels &&
        resGroupPanels.map((item: any, index: number) => {
          // if (p.children) {
          //   const text = `${p.width}x${p.height} - ${p.amount} шт.`;
          //   return (
          //     <AccordionTransition
          //       key={`${index}`}
          //       text={text}
          //       body={<AccordionPanels />}
          //     />
          //   );
          // } else {
          //   return <div key={`${index}`}>panel</div>;
          // }
          const text = `${item[0].width}x${item[0].height} - ${item.length} шт.`;
          if (item.length > 1) {
            return (
              <AccordionTransition
                key={`${index}`}
                text={text}
                body={<AccordionPanels />}
              />
            );
          } else {
            return <div key={`${index}`}>{text}</div>;
          }
        })}
    </div>
  );
};

export default Home;
