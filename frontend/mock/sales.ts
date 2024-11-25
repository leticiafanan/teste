export interface Book {
  id: number;
  title: string;
  author: string;
  originalPrice: string;
  discountedPrice: string;
  imageUrl: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'Depois daquele verão',
    author: 'Carley Fortune',
    originalPrice: 'R$ 49,90',
    discountedPrice: 'R$ 17,22',
    imageUrl: '@/assets/img/depoisdaqueleverao.jpg',
  },
  {
    id: 2,
    title: 'Verity',
    author: 'Colleen Hoover',
    originalPrice: 'R$ 79,90',
    discountedPrice: 'R$ 47,50',
    imageUrl: '@/assets/img/verity.jpg',
  },
  {
    id: 3,
    title: 'Pra sempre seu',
    author: 'Abby Jimenez',
    originalPrice: 'R$ 59,90',
    discountedPrice: 'R$ 33,76',
    imageUrl: '@/assets/img/prasempreseu.jpg',
  },
  {
    id: 4,
    title: 'Promessas Cruéis',
    author: 'Rebecca Ross',
    originalPrice: 'R$ 59,90',
    discountedPrice: 'R$ 34,20',
    imageUrl: '@/assets/img/promessascrueis.jpg',
  },
  {
    id: 5,
    title: 'A voz na sua cabeça',
    author: 'Ethan Kross',
    originalPrice: 'R$ 59,90',
    discountedPrice: 'R$ 39,45',
    imageUrl: '@/assets/img/avoznasuacabeca.jpg',
  },
  {
    id: 6,
    title: 'Chama de ferro',
    author: 'Rebecca Yarros',
    originalPrice: 'R$ 179,90',
    discountedPrice: 'R$ 98,36',
    imageUrl: '@/assets/img/chamadeferro.jpg',
  },
  {
    id: 7,
    title: 'O Deus que destrói sonhos',
    author: 'Rodrigo Bibo',
    originalPrice: 'R$ 44,90',
    discountedPrice: 'R$ 20,90',
    imageUrl: '@/assets/img/odeusquedestroisonhos.jpg',
  },
  {
    id: 8,
    title: 'Onde o corpo estava',
    author: 'Ed Brubaker',
    originalPrice: 'R$ 98,00',
    discountedPrice: 'R$ 59,76',
    imageUrl: '@/assets/img/ondeocorpoestava.jpg',
  },
  {
    id: 9,
    title: 'Conto de fadas',
    author: 'Stephen King',
    originalPrice: 'R$ 119,90',
    discountedPrice: 'R$ 52,00',
    imageUrl: '@/assets/img/contodefadas.jpg',
  },
];
