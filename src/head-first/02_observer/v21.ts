export interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

export interface Observer {
  update(displayData: DisplayData): void;
}

export interface DisplayElement {
  display(): void;
}

export class WeatherData implements Subject {
  private readonly observers: Observer[] = [];
  private displayData!: DisplayData;

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(displayData: DisplayData): void {
    this.displayData = displayData;
    this.notifyObservers();
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }
  removeObserver(_o: Observer): void {
    // TODO
  }
  notifyObservers(): void {
    this.observers.forEach((o) => o.update(this.displayData));
  }
}

export class CurrentConditionsDisplay implements DisplayElement, Observer {
  private displayData!: DisplayData;

  constructor(private readonly subject: Subject) {
    this.subject.registerObserver(this);
  }

  update(displayData: DisplayData): void {
    this.displayData = displayData;
    this.display();
  }
  display(): void {
    console.log(this.displayData);
  }
}

export class DisplayData {
  constructor(private readonly _values: number[]) {}

  get values(): number[] {
    return this._values;
  }
}
