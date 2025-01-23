'use client';
import { AccordionTransition, AccordionPrice } from '@/components';

const Home = ({ priceData }: any) => {
  return (
    <div>
      <AccordionTransition body={<AccordionPrice priceData={priceData} />} />
    </div>
  );
};

export default Home;
