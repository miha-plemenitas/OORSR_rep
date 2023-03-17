export { SeznamEkip } from './SeznamEkip';

export interface IEkipa {
  id: number;
  title: string;
}

export const ekipe: IEkipa[] = [
  { id: 1, title: 'EKIPA 1' },
  { id: 2, title: 'EKIPA 2' },
  { id: 3, title: 'EKIPA 3' },
];
