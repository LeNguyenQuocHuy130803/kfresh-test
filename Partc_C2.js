const products = [
  { name: "Áo thun", price: 150000 },
  { name: "Giày thể thao", price: 850000 },
  { name: "Mũ bóng chày", price: 120000 },
  { name: "Balo du lịch", price: 450000 },
  { name: "Đồng hồ", price: 1200000 }
];

function filterProducts(products) {
  return products
    .filter(product => product.price < 500000)
    .sort((productA, productB) => productA.price - productB.price)
    .map(product => product.name);
}

console.log(filterProducts(products));