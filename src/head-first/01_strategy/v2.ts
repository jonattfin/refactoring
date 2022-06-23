export interface FlyBehavior {
  fly(): string;
}

export class FlyWithWings implements FlyBehavior {
  fly(): string {
    return "fly";
  }
}

export class FlyNoWay implements FlyBehavior {
  fly(): string {
    return "";
  }
}

export class FlyRocketPowered implements FlyBehavior {
  fly(): string {
    return "I'm flying with a rocket!";
  }
}

export interface QuackBehavior {
  quack(): string;
}

export class Quack implements QuackBehavior {
  quack(): string {
    return "quack";
  }
}

export class Squeak implements QuackBehavior {
  quack(): string {
    return "squeak";
  }
}

export class MuteQuack implements QuackBehavior {
  quack(): string {
    return "";
  }
}

export abstract class Duck {
  constructor(
    private flyBehavior: FlyBehavior,
    private quackBehavior: QuackBehavior
  ) {}

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  performQuack(): string {
    return this.quackBehavior.quack();
  }

  performFly(): string {
    return this.flyBehavior.fly();
  }

  abstract display(): string;
}

export class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): string {
    return "display mallard duck";
  }
}

export class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Quack());
  }

  display(): string {
    return "display model duck";
  }
}

export class DuckCall {
  private readonly quackBehavior: Quack;

  constructor() {
    this.quackBehavior = new Quack();
  }

  quack() {
    return this.quackBehavior.quack();
  }
}
