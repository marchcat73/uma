'use client';
import { itemsVar } from '@/cache';
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

const panels: any[] = [
  {
    id: 1,
    width: '200',
    height: '300',
    isPerf: false,
    isCase: null,
    isBottom: null,
    openMenu: false,
  },
  {
    id: 2,
    width: '200',
    height: '300',
    isPerf: true,
    isCase: null,
    isBottom: null,
    openMenu: false,
  },
  {
    id: 3,
    width: '500',
    height: '300',
    isPerf: false,
    isCase: null,
    isBottom: null,
    openMenu: false,
  },
  {
    id: 4,
    width: '600',
    height: '300',
    isPerf: false,
    isCase: null,
    isBottom: null,
    openMenu: false,
  },
  {
    id: 5,
    width: '700',
    height: '300',
    isPerf: false,
    isCase: null,
    isBottom: null,
    openMenu: false,
  },
  {
    id: 6,
    width: '400',
    height: '200',
    isPerf: false,
    isCase: null,
    isBottom: null,
    openMenu: false,
  },
];

export default function HomePage() {
  itemsVar(panels);
  return (
    <BaseLayout>
      <Home priceData={priceData} />
    </BaseLayout>
  );
}
