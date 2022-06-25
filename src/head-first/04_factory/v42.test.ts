import { ChicagoStylePizzaStore, NYStylePizzaStore } from "./v42";

describe("", () => {
  it("", () => {
    const nyStore = new NYStylePizzaStore();

    const nyPizza = nyStore.orderPizza("cheese");
    console.log(nyPizza);

    const chicagoStore = new ChicagoStylePizzaStore();

    const chicagoPizza = chicagoStore.orderPizza("greek");
    console.log(chicagoPizza);
  });
});
