export abstract class Duck {
  quack() {
    return "quack";
  }
  swim() {
    return "swim";
  }
  fly() {
    return "fly";
  }
  abstract display(): string;
}

export class MallardDuck extends Duck {
  display(): string {
    return "display mallard duck";
  }
}

export class RedheadDuck extends Duck {
  display(): string {
    return "display redhead duck";
  }
}

export class RubberDuck extends Duck {
  override quack(): string {
    return "squeak";
  }

  override fly(): string {
    return "";
  }

  display(): string {
    return "display rubber duck";
  }
}
