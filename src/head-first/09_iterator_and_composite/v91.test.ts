import { DinnerMenu, MenuItem, PancakeHouseMenu, Waitress } from "./v91";

describe("Iterator And Composite tests", () => {
  it.only("", () => {
    const pancakeMenu = new PancakeHouseMenu();
    pancakeMenu.addItem(new MenuItem("x", 1));
    pancakeMenu.addItem(new MenuItem("z", 2));
    pancakeMenu.addItem(new MenuItem("t", 3));

    const dinnerMenu = new DinnerMenu();
    dinnerMenu.addItem(new MenuItem("xx", 1));
    dinnerMenu.addItem(new MenuItem("zz", 2));
    dinnerMenu.addItem(new MenuItem("tt", 3));

    const waitress = new Waitress(dinnerMenu, pancakeMenu);
    waitress.showMenu();

    expect(true).toBe(true);
  });
});
