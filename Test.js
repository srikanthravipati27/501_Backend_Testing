const { addItem, getCart } = require('./cart');

test('adds item to cart', () => {
  addItem('Apple');
  expect(getCart()).toContain('Apple');
});
