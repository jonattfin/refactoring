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

export class NYCheesePizza extends Pizza {
  prepare(): void {
    console.log("preparing NY cheese pizza");
  }
}

export class NYGreekPizza extends Pizza {
  prepare(): void {
    console.log("preparing NY greek pizza");
  }
}

export class ChicagoCheesePizza extends Pizza {
  prepare(): void {
    console.log("preparing Chicago cheese pizza");
  }
}

export class ChicagoGreekPizza extends Pizza {
  prepare(): void {
    console.log("preparing Chicago greek pizza");
  }
}

export abstract class PizzaStore {
  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  protected abstract createPizza(type: string): Pizza;
}

export class NYStylePizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    let pizza;

    if (type == "Cheese") {
      pizza = new NYCheesePizza();
    } else {
      pizza = new NYGreekPizza();
    }

    return pizza;
  }
}

export class ChicagoStylePizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    let pizza;

    if (type == "Cheese") {
      pizza = new ChicagoCheesePizza();
    } else {
      pizza = new ChicagoGreekPizza();
    }

    return pizza;
  }
}
