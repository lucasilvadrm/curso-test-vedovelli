import find from 'lodash/find';
import remove from 'lodash/remove';

export default class Cart {
  items = [];

  add(item) {
    const itemToFind = { product: item.product };
    if (find(this.items, itemToFind)) {
      remove(this.items, itemToFind);
    }
    this.items.push(item);
  }

  remove(product) {
    remove(this.items, { product });
  }

  checkout() {
    return {
      total: this.getTotal(),
      items: this.items,
    };
  }

  getTotal() {
    const reducer = this.items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
    return reducer;
  }
}
