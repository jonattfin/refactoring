import { random } from "lodash";

export interface State {
  insertQuarter(): void;
  ejectQuarter(): void;
  turnCrank(): void;
  dispense(): void;
}

export class GumballMachine {
  noQuarterState!: State;
  hasQuarterState!: State;
  soldState!: State;
  soldOutState!: State;
  winnerState!: State;

  private state = this.soldOutState;
  private count = 0;

  constructor(numberOfGumballs: number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.soldOutState = new SoldOutState(this);
    this.winnerState = new WinnerState(this);

    this.count = numberOfGumballs;
    if (this.count > 0) {
      this.state = this.noQuarterState;
    }
  }

  setState(state: State) {
    this.state = state;
  }

  getCount() {
    return this.count;
  }

  insertQuarter() {
    this.state.insertQuarter();
  }

  ejectQuarter() {
    this.state.ejectQuarter();
  }

  turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }

  releaseBall() {
    if (this.count != 0) {
      this.count--;
    }
  }
}

export class SoldState implements State {
  constructor(private readonly machine: GumballMachine) {}

  insertQuarter(): void {
    console.log("nothing to do...");
  }
  ejectQuarter(): void {
    console.log("nothing to do...");
  }
  turnCrank(): void {
    console.log("nothing to do...");
  }
  dispense(): void {
    this.machine.releaseBall();
    if (this.machine.getCount() > 0) {
      this.machine.setState(this.machine.noQuarterState);
    } else {
      this.machine.setState(this.machine.soldOutState);
    }
  }
}

export class SoldOutState implements State {
  constructor(private readonly machine: GumballMachine) {}

  insertQuarter(): void {
    console.log("nothing to do...");
  }
  ejectQuarter(): void {
    console.log("nothing to do...");
  }
  turnCrank(): void {
    console.log("nothing to do...");
  }
  dispense(): void {
    console.log("nothing to do...");
  }
}

export class NoQuarterState implements State {
  constructor(private readonly machine: GumballMachine) {}

  insertQuarter(): void {
    this.machine.setState(this.machine.hasQuarterState);
  }
  ejectQuarter(): void {
    console.log("nothing to do...");
  }
  turnCrank(): void {
    console.log("nothing to do...");
  }
  dispense(): void {
    console.log("nothing to do...");
  }
}

export class HasQuarterState implements State {
  constructor(private readonly machine: GumballMachine) {}

  insertQuarter(): void {
    console.log("nothing to do...");
  }
  ejectQuarter(): void {
    this.machine.setState(this.machine.noQuarterState);
  }
  turnCrank(): void {
    const winner = random(10);
    if (winner == 0 && this.machine.getCount() > 1) {
      this.machine.setState(this.machine.winnerState);
    } else {
      this.machine.setState(this.machine.soldState);
    }
  }
  dispense(): void {
    console.log("nothing to do...");
  }
}

export class WinnerState implements State {
  constructor(private readonly machine: GumballMachine) {}

  insertQuarter(): void {
    console.log("nothing to do...");
  }
  ejectQuarter(): void {
    console.log("nothing to do...");
  }
  turnCrank(): void {
    console.log("nothing to do...");
  }
  dispense(): void {
    if (this.machine.getCount() == 0) {
      this.machine.setState(this.machine.soldOutState);
    } else {
      this.machine.releaseBall();
      if (this.machine.getCount() > 0) {
        this.machine.setState(this.machine.noQuarterState);
      } else {
        this.machine.setState(this.machine.soldOutState);
      }
    }
  }
}
