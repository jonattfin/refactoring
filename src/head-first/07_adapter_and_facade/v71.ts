export interface Duck {
  quack(): void;
  fly(): void;
}

export class WildDuck implements Duck {
  quack(): void {
    console.log("quack of the wild duck...");
  }
  fly(): void {
    console.log("fly of the wild duck...");
  }
}

export interface Turkey {
  gobble(): void;
  fly(): void;
}

export class WildTurkey implements Turkey {
  gobble(): void {
    console.log("gobble gobble");
  }
  fly(): void {
    console.log("flying...as a wild turkey");
  }
}

export class TurkeyAdapter implements Duck {
  constructor(private readonly turkey: Turkey) {}

  quack(): void {
    this.turkey.gobble();
  }
  fly(): void {
    this.turkey.fly();
  }
}

export class DuckAdapter implements Turkey {
  constructor(private readonly duck: Duck) {}

  gobble(): void {
    this.duck.quack();
  }
  fly(): void {
    this.duck.fly();
  }
}

export class HomeTheaterFacade {
  private readonly amplifier!: Amplifier;
  private readonly tunner!: Tunner;
  private readonly projector!: Projector;

  constructor() {
    this.amplifier = new Amplifier();
    this.tunner = new Tunner();
    this.projector = new Projector();
  }

  watchMovie(name: string): void {
    console.log(`Preparing the movie with name ${name} ...`);
    this.projector.on();
    this.tunner.on();
    this.amplifier.on();
  }
}

export class Amplifier {
  on() {
    console.log("amplfier on..");
  }
}
export class Tunner {
  on() {
    console.log("tunner on..");
  }
}
export class Projector {
  on() {
    console.log("projector on..");
  }
}
