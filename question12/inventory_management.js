// Filtered Products:
// [
//     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true },
// ]

// Sorted Products by Price:
// [
//     { name: 'Book', category: 'Books', price: 20, quantity: 100, available: true },
//     { name: 'Shirt', category: 'Clothing', price: 30, quantity: 50, available: false },
//     { name: 'Chair', category: 'Furniture', price: 100, quantity: 20, available: true },
//     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true }
// ]

// Products with Total Value:
// [
//     { name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10, available: true, totalValue: 12000 },
//     { name: 'Chair', category: 'Furniture', price: 100, quantity: 20, available: true, totalValue: 2000 },
//     { name: 'Shirt', category: 'Clothing', price: 30, quantity: 50, available: false, totalValue: 1500 },
//     { name: 'Book', category: 'Books', price: 20, quantity: 100, available: true, totalValue: 2000 }
// ]

// Inventory Report:
// {
//     totalProducts: 4,
//     totalValue: 17500,
//     avgPrice: 337.5,
//     categoryDistribution: { Electronics: 1, Furniture: 1, Clothing: 1, Books: 1 }
// }

const products = [
  {
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    quantity: 10,
    available: true,
  },
  {
    name: "Chair",
    category: "Furniture",
    price: 100,
    quantity: 20,
    available: true,
  },
  {
    name: "Shirt",
    category: "Clothing",
    price: 30,
    quantity: 50,
    available: false,
  },
  {
    name: "Book",
    category: "Books",
    price: 20,
    quantity: 100,
    available: true,
  },
];

// Filtered Products
function filterProducts(products, filter_basis, filter_value) {
  let filtered_products = products.filter((elem) => {
    return elem[filter_basis] == filter_value;
  });
  return filtered_products;
}

console.log(filterProducts(products, "name", "Book"));

// sorted Products by Price
function sortedProducts(products, basis = 1) {
  if (basis == 1) {
    let sorted_products = products.sort((a, b) => a.price - b.price);
    return sorted_products;
  } else {
    let sorted_products = products.sort((a, b) => b.price - a.price);
    return sorted_products;
  }
}

// sortedProducts(products, 1) or sortedProducts(products) for ascending order
// sortedProducts(products, -1) for descending order
console.log(sortedProducts(products));

// Products with total value;
function totalValue(products) {
  for (let i = 0; i < products.length; i++) {
    let { price, quantity } = products[i];

    products[i].totalValue = price * quantity;
  }
  return products;
}

console.log(totalValue(products));

// Inventory report;
function inventoryReport(products) {
  let obj = {};
  obj.totalProducts = products.length;

  obj.totalValue = products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  obj.averagePrice =
    products.reduce((acc, curr) => acc + curr.price, 0) / products.length;

  obj.categoryDistribution = {};

  for (let i = 0; i < products.length; i++) {
    if (products[i].category in obj.categoryDistribution) {
      obj.categoryDistribution[products[i].category] += 1;
    } else {
      obj.categoryDistribution[products[i].category] = 1;
    }
  }

  return obj;
}

console.log(inventoryReport(products));
