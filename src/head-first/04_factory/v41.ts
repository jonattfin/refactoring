export abstract class Pizza {
  abstract prepare(): void;
  bake(): void {
    console.log("bake");
  }
  cut(): void {
    console.log("cut");
  }
  box(): void {
    console.log("box");
  }
}

export class CheesePizza extends Pizza {
  prepare(): void {
    console.log("preparing cheese pizza");
  }
}

export class GreekPizza extends Pizza {
  prepare(): void {
    console.log("preparing greek pizza");
  }
}

export class PizzaStore {
  constructor(private readonly pizzaFactory: PizzaFactory) {}

  orderPizza(type: string): Pizza {
    const pizza = this.pizzaFactory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export class PizzaFactory {
  createPizza(type: string): Pizza {
    let pizza;

    if (type == "Cheese") {
      pizza = new CheesePizza();
    } else {
      pizza = new GreekPizza();
    }

    return pizza;
  }
}
