import { FlyRocketPowered, MallardDuck, ModelDuck } from "./v2";

describe("Testing ducks", () => {
  it("MallardDuck should work properly", () => {
    const duck = new MallardDuck();

    expect(duck.performQuack()).toBe("quack");
    expect(duck.performFly()).toBe("fly");
    expect(duck.display()).toBe("display mallard duck");
  });

  it("ModelDuck should work properly", () => {
    const duck = new ModelDuck();

    expect(duck.performQuack()).toBe("quack");
    expect(duck.performFly()).toBe("");
    expect(duck.display()).toBe("display model duck");

    duck.setFlyBehavior(new FlyRocketPowered());

    expect(duck.performFly()).toBe("I'm flying with a rocket!");
  });
});
