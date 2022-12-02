/*
For example, suppose the Elves finish writing their items' Calories and end up with the following
list:

1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
This list represents the Calories of the food carried by five Elves:

The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
The second Elf is carrying one food item with 4000 Calories.
The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
The fifth Elf is carrying one food item with 10000 Calories.
In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd
like to know how many Calories are being carried by the Elf carrying the most Calories. In the
example above, this is 24000 (carried by the fourth Elf).

Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?
*/

/*
initial thought: list of lists
- each sub array will be the calories for a single elf
*/

import { input } from "./input.js";

function findGreatestTotalCalories() {
  let currentGreatest = 0;
  let currentSecondgreatest = 0;
  let currentThirdGreatest = 0;

  const elfCalories = input.split("\n\n");

  for (let i = 0; i < elfCalories.length; i++) {
    const elfCaloriesString = elfCalories[i];
    const elfTotal = elfCaloriesString
      .split("\n")
      .reduce((total, current) => total + +current, 0);

    // this is cumbersome, has to be a better way to do this
    if (elfTotal > currentGreatest) {
      if (currentGreatest === 0) {
        currentGreatest = elfTotal;
        continue;
      }

      const prevGreatest = currentGreatest;
      currentGreatest = elfTotal;
      const prevSecond = currentSecondgreatest;
      currentSecondgreatest = prevGreatest;
      currentThirdGreatest = prevSecond;
    } else if (elfTotal > currentSecondgreatest) {
      if (currentSecondgreatest === 0) {
        currentSecondgreatest = elfTotal;
        continue;
      }

      const prevSecond = currentSecondgreatest;
      currentSecondgreatest = elfTotal;
      currentThirdGreatest = prevSecond;
    } else if (elfTotal > currentThirdGreatest) {
      currentThirdGreatest = elfTotal;
    }
  }

  return currentGreatest + currentSecondgreatest + currentThirdGreatest;
}

console.log(findGreatestTotalCalories());

