let cart = [];

function addItem(item) {
  cart.push(item);
  return cart;
}

function getCart() {
  return cart;
}

module.exports = { addItem, getCart };
