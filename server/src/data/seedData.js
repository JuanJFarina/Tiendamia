// seedData.js

const mockData = [
    {
      createDate: new Date('2023-07-20'),
      status: 'Approve',
      client: 'John Doe',
      shippingAddress: '123 Main St, City, Country',
      shippingPromise: new Date('2023-07-25'),
      items: [
        {
          title: 'Product 1',
          description: 'Description for Product 1',
          url: 'https://example.com/product1',
          price: 10.99,
          quantity: 2,
        },
      ],
    },
    {
      createDate: new Date('2023-07-21'),
      status: 'Traveling',
      client: 'Jane Smith',
      shippingAddress: '456 Elm St, City, Country',
      shippingPromise: new Date('2023-07-26'),
      items: [
        {
          title: 'Product 2',
          description: 'Description for Product 2',
          url: 'https://example.com/product2',
          price: 15.99,
          quantity: 1,
        },
      ],
    },
    {
      createDate: new Date('2023-07-22'),
      status: 'Approve',
      client: 'Michael Johnson',
      shippingAddress: '789 Oak St, City, Country',
      shippingPromise: new Date('2023-07-27'),
      items: [
        {
          title: 'Product 3',
          description: 'Description for Product 3',
          url: 'https://example.com/product3',
          price: 8.50,
          quantity: 3,
        },
      ],
    },
    {
      createDate: new Date('2023-07-23'),
      status: 'Approve',
      client: 'Emma Brown',
      shippingAddress: '1010 Pine St, City, Country',
      shippingPromise: new Date('2023-07-28'),
      items: [
        {
          title: 'Product 4',
          description: 'Description for Product 4',
          url: 'https://example.com/product4',
          price: 12.49,
          quantity: 1,
        },
      ],
    },
    {
      createDate: new Date('2023-07-24'),
      status: 'Cancel',
      client: 'William Lee',
      shippingAddress: '1111 Cedar St, City, Country',
      shippingPromise: new Date('2023-07-29'),
      items: [
        {
          title: 'Product 5',
          description: 'Description for Product 5',
          url: 'https://example.com/product5',
          price: 5.99,
          quantity: 5,
        },
      ],
    },
    {
      createDate: new Date('2023-07-25'),
      status: 'Approve',
      client: 'Olivia Wilson',
      shippingAddress: '2222 Birch St, City, Country',
      shippingPromise: new Date('2023-07-30'),
      items: [
        {
          title: 'Product 6',
          description: 'Description for Product 6',
          url: 'https://example.com/product6',
          price: 20.00,
          quantity: 2,
        },
      ],
    },
    {
      createDate: new Date('2023-07-26'),
      status: 'Delivery',
      client: 'James Davis',
      shippingAddress: '3333 Maple St, City, Country',
      shippingPromise: new Date('2023-07-31'),
      items: [
        {
          title: 'Product 7',
          description: 'Description for Product 7',
          url: 'https://example.com/product7',
          price: 18.75,
          quantity: 1,
        },
      ],
    },
    {
      createDate: new Date('2023-07-27'),
      status: 'Traveling',
      client: 'Sophia Martinez',
      shippingAddress: '4444 Oak St, City, Country',
      shippingPromise: new Date('2023-08-01'),
      items: [
        {
          title: 'Product 8',
          description: 'Description for Product 8',
          url: 'https://example.com/product8',
          price: 9.99,
          quantity: 4,
        },
      ],
    },
    {
      createDate: new Date('2023-07-28'),
      status: 'Approve',
      client: 'Alexander Anderson',
      shippingAddress: '5555 Elm St, City, Country',
      shippingPromise: new Date('2023-08-02'),
      items: [
        {
          title: 'Product 9',
          description: 'Description for Product 9',
          url: 'https://example.com/product9',
          price: 7.50,
          quantity: 3,
        },
      ],
    },
    {
      createDate: new Date('2023-07-29'),
      status: 'Approve',
      client: 'Ava White',
      shippingAddress: '6666 Pine St, City, Country',
      shippingPromise: new Date('2023-08-03'),
      items: [
        {
          title: 'Product 10',
          description: 'Description for Product 10',
          url: 'https://example.com/product10',
          price: 14.99,
          quantity: 1,
        },
      ],
    },
    // Add more orders here...
  ];
  
  module.exports = mockData;  