// Exported variables use live bindings, so importers see updated values.
export let numberOfSales = 0;
export let totalSales = 0;

// Named exports let another module import these functions by name.
export function buy(buyer, item) {
  buyer.total += item.price;
}

export function sell(item) {
  totalSales += item.price;
  numberOfSales += 1;
  item.quantity -= 1;
}
