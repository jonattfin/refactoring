// inverse of: Inline variable

export function calculatePrice1(order: Order): number {
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

export function calculatePrice2(order: Order): number {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100);

  return basePrice - quantityDiscount + shipping;
}

class Order {
  _quantity: number;
  _itemPrice: number;

  constructor(quantity: number, itemPrice: number) {
    this._quantity = quantity;
    this._itemPrice = itemPrice;
  }

  get quantity(): number {
    return this._quantity;
  }

  get itemPrice(): number {
    return this._itemPrice;
  }
}
