import Route from '@ioc:Adonis/Core/Route';

Route.get('/products', async () => {
  return [
    { id: 1, name: 'Laptop', price: 2000 },
    { id: 2, name: 'Smartphone', price: 1000 },
  ];
});

Route.get('/products/:id', async ({ params }) => {
  const products = [
    { id: 1, name: 'Laptop', price: 2000 },
    { id: 2, name: 'Smartphone', price: 1000 },
  ];

  return products.find((product) => product.id === Number(params.id)) || {};
});

Route.post('/upload/image', 'UploadsController.uploadImage');
