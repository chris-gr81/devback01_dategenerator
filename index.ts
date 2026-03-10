import { getUnixTime, fromUnixTime } from "date-fns";

function main() {
  // Read dates
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    console.log(
      "Please provide exactly one argument to generate the correct number of dates.",
    );
    process.exit(1);
  }

  if (typeof args[0] !== "string") process.exit(1);

  const numberOfDates = parseInt(args[0], 10);

  if (isNaN(numberOfDates) || numberOfDates <= 0) {
    console.log("Please provide a valid number as argument");
    process.exit(1);
  }

  console.log(`Generating ${numberOfDates} dates`);

  // Genereate dates
  function generateDatesArray(numberOfDates: number) {
    const max = getUnixTime(new Date()); // max is always the current unix-time
    const min = max - 315576000; // always 10 years before now
    const unsortedDates = [];

    for (let i = 1; i <= numberOfDates; i++) {
      unsortedDates.push(
        fromUnixTime(Math.floor(Math.random() * (max - min + 1) + min)),
      );
    }

    return unsortedDates;
  }

  const unsortedDates = generateDatesArray(numberOfDates);
  console.log(unsortedDates);
  // Sort dates
  // Format dates
  // Write dates to file
}

main();
