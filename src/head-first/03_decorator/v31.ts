export enum Size {
  Small,
  Medium,
  Large,
}

abstract class Beverage {
  protected description!: string;
  private size: Size = Size.Small;

  getDescription(): string {
    return this.description;
  }

  setSize(size: Size) {
    this.size = size;
    console.log(`Size is ${this.size}`);
  }

  getSize() {
    return this.size;
  }

  abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}

export class Expresso extends Beverage {
  constructor() {
    super();
    this.description = "Expresso";
  }

  cost(): number {
    return 1.99;
  }
}

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  cost(): number {
    return 0.89;
  }
}

export class Mocha extends CondimentDecorator {
  constructor(private readonly beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Mocha";
  }
  cost(): number {
    return 0.2 + this.beverage.cost();
  }
}

export class Whip extends CondimentDecorator {
  constructor(private readonly beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Whip";
  }
  cost(): number {
    let cost = this.beverage.cost();
    switch (this.beverage.getSize()) {
      case Size.Large:
        cost += 0.8;
        break;
      case Size.Medium:
        cost += 0.6;
        break;
      default:
        cost += 0.4;
        break;
    }
    console.log(`The size is ${this.getSize()}, and the cost ${cost}.`);
    return cost;
  }
}
