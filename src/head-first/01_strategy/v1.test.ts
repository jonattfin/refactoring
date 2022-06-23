import { MallardDuck, RedheadDuck, RubberDuck } from "./v1";

describe("Testing ducks", () => {
  it("MallardDuck should work properly", () => {
    const duck = new MallardDuck();

    expect(duck.swim()).toBe("swim");
    expect(duck.quack()).toBe("quack");
    expect(duck.fly()).toBe("fly");
    expect(duck.display()).toBe("display mallard duck");
  });

  it("RedheadDuck should work properly", () => {
    const duck = new RedheadDuck();

    expect(duck.swim()).toBe("swim");
    expect(duck.quack()).toBe("quack");
    expect(duck.fly()).toBe("fly");
    expect(duck.display()).toBe("display redhead duck");
  });

  it("RubberDuck should work properly", () => {
    const duck = new RubberDuck();

    expect(duck.swim()).toBe("swim");
    expect(duck.quack()).toBe("squeak");
    expect(duck.fly()).toBe("");
    expect(duck.display()).toBe("display rubber duck");
  });
});
