export abstract class CaffeineBeverage {
  prepareReceipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  private boilWater(): void {
    console.log("boiling water...");
  }

  private pourInCup(): void {
    console.log("pouring in cup...");
  }

  protected abstract brew(): void;
  protected abstract addCondiments(): void;
}

export class Tea extends CaffeineBeverage {
  protected brew(): void {
    console.log("brewing tea...");
  }
  protected addCondiments(): void {
    console.log("add lemon...");
  }
}

export class Coffee extends CaffeineBeverage {
  protected brew(): void {
    console.log("brewing coffee...");
  }
  protected addCondiments(): void {
    console.log("add sugar and milk...");
  }
}
