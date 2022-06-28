export class MenuItem {
  constructor(private name: string, private price: number) {}

  getName(): string {
    return this.name;
  }
  getPrice(): number {
    return this.price;
  }
}

export interface Iterator {
  hasNext(): boolean;
  next(): MenuItem;
}

export class PancakeHouseMenu {
  private readonly menuItems: MenuItem[] = new Array<MenuItem>();

  addItem(menuItem: MenuItem) {
    this.menuItems.push(menuItem);
  }

  createIterator(): Iterator {
    return new MenuIterator(this.menuItems);
  }
}

export class DinnerMenu {
  private readonly menuItems: MenuItem[] = new Array<MenuItem>();

  addItem(menuItem: MenuItem) {
    this.menuItems.push(menuItem);
  }

  createIterator(): Iterator {
    return new MenuIterator(this.menuItems);
  }
}

export class MenuIterator implements Iterator {
  private position: number = 0;

  constructor(private readonly menuItems: MenuItem[]) {}

  hasNext(): boolean {
    return this.position < this.menuItems.length;
  }
  next(): MenuItem {
    const menuItem = this.menuItems[this.position];
    this.position++;
    return menuItem;
  }
}

export class Waitress {
  constructor(
    private readonly dinnerMenu: DinnerMenu,
    private readonly pankakeMenu: PancakeHouseMenu
  ) {}

  showMenu() {
    const pankakeIterator = this.pankakeMenu.createIterator();
    this.printMenu(pankakeIterator);

    const dinnerMenuIterator = this.dinnerMenu.createIterator();
    this.printMenu(dinnerMenuIterator);
  }

  private printMenu(iterator: Iterator) {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();

      console.log(`name: ${menuItem.getName()} price: ${menuItem.getPrice()}`);
    }
  }
}
