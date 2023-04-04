import { Igralec } from '../Igralec';
export { SeznamEkip } from './SeznamEkip';

export interface Igralec {
    ime: string;
    starost: number;
    stDresa: number;
    pozicija: string;
    poskodovan: boolean;
}

export interface EkipaProps {
    id: number;
    title: string;
    letoUstanovitve: string;
    direktor: string;
    trener: string;
    igralci: Igralec[];
}

export const ekipe: EkipaProps[] = [
    {
        id: 6,
        title: 'EKIPA 1',
        letoUstanovitve: '1905',
        direktor: 'Todd Boehly',
        trener: 'Graham Potter',
        igralci: [
            {
                ime: 'Kepa Arrizabalaga',
                starost: 24,
                stDresa: 10,
                pozicija: 'Napadalec',
                poskodovan: false,
            },
            {
                ime: 'Thiago Silva',
                starost: 28,
                stDresa: 5,
                pozicija: 'Vezist',
                poskodovan: true,
            },
            {
                ime: 'Reece James',
                starost: 30,
                stDresa: 2,
                pozicija: 'Branilec',
                poskodovan: false,
            },
        ],
    },
    {
        id: 7,
        title: 'EKIPA 2',
        letoUstanovitve: '11313',
        direktor: 'Todd lol',
        trener: 'Graham ppppp',
        igralci: [
            {
                ime: 'César Azpilicueta',
                starost: 24,
                stDresa: 10,
                pozicija: 'Napadalec',
                poskodovan: false,
            },
            {
                ime: 'Christian Pulisic',
                starost: 28,
                stDresa: 5,
                pozicija: 'Vezist',
                poskodovan: true,
            },
            {
                ime: 'Mason Mount',
                starost: 30,
                stDresa: 2,
                pozicija: 'Branilec',
                poskodovan: false,
            },
            {
                ime: 'Conor Gallagher',
                starost: 24,
                stDresa: 10,
                pozicija: 'Napadalec',
                poskodovan: false,
            },
            {
                ime: 'Hakim Ziyech',
                starost: 24,
                stDresa: 10,
                pozicija: 'Napadalec',
                poskodovan: false,
            },
            {
                ime: 'Miha Plemenitaš',
                starost: 34,
                stDresa: 8,
                pozicija: 'Napadalec',
                poskodovan: false,
            },
            {
                ime: 'Mitko Cezar',
                starost: 17,
                stDresa: 5,
                pozicija: 'Vezist',
                poskodovan: true,
            },
            {
                ime: 'Mihajlo Petrović',
                starost: 30,
                stDresa: 40,
                pozicija: 'Branilec',
                poskodovan: false,
            },
            {
                ime: 'Nole Gallagher',
                starost: 24,
                stDresa: 10,
                pozicija: 'Napadalec',
                poskodovan: false,
            },
            {
                ime: 'Mile Kitić',
                starost: 45,
                stDresa: 55,
                pozicija: 'Napadalec',
                poskodovan: false,
            },
            {
                ime: 'Stanko Šarkezi',
                starost: 55,
                stDresa: 4,
                pozicija: 'Napadalec',
                poskodovan: false,
            },
        ],
    },
    {
        id: 8,
        title: 'EKIPA 3',
        letoUstanovitve: '2121212121',
        direktor: 'miha',
        trener: 'plemko',
        igralci: [
            {
                ime: 'Kai Havertz',
                starost: 24,
                stDresa: 10,
                pozicija: 'Napadalec',
                poskodovan: false,
            },
            {
                ime: 'Raheem Sterling',
                starost: 28,
                stDresa: 5,
                pozicija: 'Vezist',
                poskodovan: true,
            },
            {
                ime: 'João Félix',
                starost: 30,
                stDresa: 2,
                pozicija: 'Branilec',
                poskodovan: false,
            },
        ],
    },
];
