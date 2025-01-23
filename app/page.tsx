import { BaseLayout } from '@/layouts';
import { Home } from '@/view';

const priceData = {
  text: 'Цена за кв. метр',
  price: '2 790р.', // TODO форматировать в зависимости от значения
  materials: [
    { value: 'EvoGloss', label: 'EvoGloss' },
    { value: 'EvoGloss1', label: 'EvoGloss1' },
    { value: 'EvoGloss2', label: 'EvoGloss2' },
    { value: 'EvoGloss3', label: 'EvoGloss3' },
  ],
  articuls: [
    { value: 'P001', label: 'P001' },
    { value: 'P002', label: 'P002' },
    { value: 'P003', label: 'P003' },
    { value: 'P004', label: 'P004' },
    { value: 'P005', label: 'P005' },
    { value: 'P006', label: 'P006' },
  ],
};

export default async function HomePage() {
  return (
    <BaseLayout>
      <Home priceData={priceData} />
    </BaseLayout>
  );
}
