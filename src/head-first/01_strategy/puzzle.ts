export interface WeaponBehavior {
  useWeapon(): string;
}

class KnifeBehavior implements WeaponBehavior {
  useWeapon(): string {
    return "knife";
  }
}

class AxeBehavior implements WeaponBehavior {
  useWeapon(): string {
    return "axe";
  }
}

class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon(): string {
    return "bow and arrow";
  }
}

export class Character {
  constructor(private weaponBehavior: WeaponBehavior) {}

  setWeapon(w: WeaponBehavior) {
    this.weaponBehavior = w;
  }

  fight(): string {
    return this.weaponBehavior.useWeapon();
  }
}

export class Queen extends Character {
  constructor() {
    super(new KnifeBehavior());
  }
}

export class King extends Character {
  constructor() {
    super(new BowAndArrowBehavior());
  }
}

export class Troll extends Character {
  constructor() {
    super(new AxeBehavior());
  }
}
