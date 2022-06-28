import { GumballMachine } from "./v102";

describe("State tests", () => {
  it("", () => {

    const gumballMachine = new GumballMachine(10);

    expect(gumballMachine.getCount()).toBe(10);

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    expect(gumballMachine.getCount()).toBe(9);
    console.log(`inventory ${gumballMachine.getCount()}`)

    gumballMachine.insertQuarter();
    gumballMachine.ejectQuarter();
    gumballMachine.turnCrank();

    expect(gumballMachine.getCount()).toBe(9);
    console.log(`inventory ${gumballMachine.getCount()}`)

    expect(true).toBe(true);
  });
});
