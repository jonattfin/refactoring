export class GumballMachine {
  private SOLD_OUT = 0;
  private NO_QUARTER = 1;
  private HAS_QUARTER = 2;
  private SOLD = 3;
  private OUT_OF_GUMBALLS = 4;

  private state = this.SOLD_OUT;
  private gumballs = 0;

  constructor(gumballs: number) {
    this.gumballs = gumballs;
    this.state = this.NO_QUARTER;
  }

  insertsQuarter() {
    if (this.state == this.NO_QUARTER) {
      this.state = this.HAS_QUARTER;
    }
  }

  ejectsQuarter() {
    if (this.state == this.HAS_QUARTER) {
      this.state = this.NO_QUARTER;
    }
  }

  turnsCrank() {
    if (this.state == this.HAS_QUARTER) {
      this.state = this.SOLD;
      this.dispenseGumball();
    }
  }

  private dispenseGumball() {
    if (this.state == this.SOLD) {
      this.gumballs--;
      if (this.gumballs > 0) {
        this.state = this.NO_QUARTER;
      } else {
        this.state = this.OUT_OF_GUMBALLS;
      }
    }
  }
}
