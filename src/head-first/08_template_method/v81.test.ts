import { Coffee, Tea } from "./v81";

describe("Template method tests", () => {
  it.only("", () => {
    var coffee = new Coffee();
    coffee.prepareReceipe();

    var tea = new Tea();
    tea.prepareReceipe();

    expect(true).toBe(true);
  });
});
