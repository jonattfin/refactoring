import { Character, King, Queen, Troll } from "./puzzle";

describe("Testing puzzle", () => {
  it("Puzzle should work properly", () => {
    const charactersAndFights = [
      [new King(), "bow and arrow"],
      [new Queen(), "knife"],
      [new Troll(), "axe"],
    ];

    charactersAndFights.forEach((element) => {
      const [character, fightResult] = element;
      expect((character as Character).fight()).toBe(fightResult);
    });
  });
});
