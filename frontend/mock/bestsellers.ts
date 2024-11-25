export interface Book {
  id: number;
  title: string;
  author: string;
  price: string;
  image: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'A empregada',
    author: 'Freida McFadden',
    price: 'R$25,40',
    image: require('@/mock/bestsellers'),
  },
  {
    id: 2,
    title: 'M ou N?',
    author: 'Agatha Christie',
    price: 'R$42,60',
    image: require('~/assets/img/M ou N.jpg'),
  },
  {
    id: 3,
    title: 'Era uma vez um coração partido',
    author: 'Stephanie Garber',
    price: 'R$31,50',
    image: require('~/assets/img/Era uma vez um coração partido.jpg'),
  },
  {
    id: 4,
    title: 'Quarta Asa',
    author: 'Rebecca Yarros',
    price: 'R$57,60',
    image: require('~/assets/img/Quarta Asa.jpg'),
  },
  {
    id: 5,
    title: 'O despertar da lua caída',
    author: 'Sarah A. Parker, Carolina Candido, e outros',
    price: 'R$62,70',
    image: require('~/assets/img/O despertar da lua caida.jpg'),
  },
  {
    id: 6,
    title: 'Carmilla - A vampira de Karnstein',
    author: 'Le Fanu J. Sheridan e John Polidori',
    price: 'R$19,90',
    image: require('~/assets/img/Carmilla - A vampira de Karnstein.jpg'),
  },
  {
    id: 7,
    title: 'A Biblioteca da Meia-Noite',
    author: 'Matt Haig e Adriana Fidalgo',
    price: 'R$41,90',
    image: require('~/assets/img/A Biblioteca da Meia-Noite.jpg'),
  },
  {
    id: 8,
    title: 'A paciente silenciosa',
    author: 'Alex Michaelides e Clóvis Marques',
    price: 'R$39,90',
    image: require('~/assets/img/A paciente silenciosa.jpg'),
  },
  {
    id: 9,
    title: 'O segredo da empregada',
    author: 'Freida McFadden e Fernanda Abreu',
    price: 'R$39,45',
    image: require('~/assets/img/O segredo da empregada.jpg'),
  },
];