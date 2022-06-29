// inline function
// inverse of: Extract Function

export function getRating1(driver: Driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver: Driver) {
  return driver.numberOfLateDeliveries > 5;
}

export function getRating2(driver: Driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

class Driver {
  numberOfLateDeliveries: number = 0;

  constructor(numberOfLateDeliveries: number) {
    this.numberOfLateDeliveries = numberOfLateDeliveries;
  }
}
