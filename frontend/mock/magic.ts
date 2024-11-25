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
    title: 'O despertar da lua caída',
    author: 'Sarah A. Parker',
    price: 'R$56,91',
    image: '@/assets/img/O despertar da lua caida.jpg',
  },
  {
    id: 2,
    title: 'Box Trilogia O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    price: 'R$129,90',
    image: '@/assets/img/Box Trilogia O Senhor dos Anéis.jpg',
  },
  {
    id: 3,
    title: 'Edgar Allan Poe - Vol. 1: Sinta o medo clássico',
    author: 'Edgar Allan Poe',
    price: 'R$61,28',
    image: '@/assets/img/Edgar Allan Poe - Vol. 1.jpg',
  },
  {
    id: 4,
    title: 'Edgar Allan Poe - Vol. 2: O darksider original mais vivo do que nunca',
    author: 'Edgar Allan Poe',
    price: 'R$48,25',
    image: '@/assets/img/Edgar Allan Poe - Vol. 2.jpg',
  },
  {
    id: 5,
    title: 'Duna: livro 1',
    author: 'Frank Herbert',
    price: 'R$66,90',
    image: '@/assets/img/Duna- livro 1.jpg',
  },
];