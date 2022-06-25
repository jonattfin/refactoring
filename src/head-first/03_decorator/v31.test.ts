import { Expresso, HouseBlend, Mocha, Size, Whip } from "./v31";

describe("", () => {
  it("", () => {
    const beverage1 = new Expresso();
    expect(beverage1.cost()).toBe(1.99);

    let beverage2 = new HouseBlend();
    beverage2.setSize(Size.Large);

    beverage2 = new Whip(beverage2);
    beverage2 = new Mocha(beverage2);

    expect(beverage2.cost()).toBe(1.89);
    expect(beverage2.getDescription()).toBe("House Blend Coffee, Whip, Mocha");
  });
});
