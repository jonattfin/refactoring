import { DuckAdapter, HomeTheaterFacade, TurkeyAdapter, WildDuck, WildTurkey } from "./v71";

describe("", () => {
  it.only("adapter", () => {
    const turkey = new WildTurkey();
    const turkeyAdapter = new TurkeyAdapter(turkey);

    turkeyAdapter.quack();

    const duck = new WildDuck();
    const duckAdapter = new DuckAdapter(duck);

    duckAdapter.gobble();

    expect(true).toBe(true);
  });

  it.only("facade", () => {
   
    const facade = new HomeTheaterFacade();
    facade.watchMovie("Gone with the wind");

    expect(true).toBe(true);
  });
});
