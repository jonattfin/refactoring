import { random, range } from "lodash";

import { CurrentConditionsDisplay, DisplayData, WeatherData } from "./v21";

describe("WeatherData tests", () => {
  it("", () => {
    const weatherData = new WeatherData();

    const _currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

    for (var _item of range(5)) {
      weatherData.setMeasurements(getDisplayData());
    }
  });
});

function getDisplayData() {
  return new DisplayData([random(1, 10), random(10, 100), random(100, 1000)]);
}

// import {} from './v1';

// describe("WeatherData tests", () => {
//   it("", () => {

//     expect(true).toBe(true);
//   });
// });
