import {
  formatDatesArray,
  generateDatesArray,
  sortDatesArray,
} from "./util/date.util";

function main() {
  // Read dates
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    console.log(
      "Please provide exactly one argument to generate the correct number of dates.",
    );
    process.exit(1);
  }

  if (typeof args[0] !== "string") process.exit(1); // avoid type missmatch

  const numberOfDates = parseInt(args[0], 10);

  if (isNaN(numberOfDates) || numberOfDates <= 0) {
    console.log("Please provide a valid number as argument");
    process.exit(1);
  }

  console.log(`Generating ${numberOfDates} dates`);

  // Genereate dates
  const unsortedDatesArray = generateDatesArray(numberOfDates);
  console.log(unsortedDatesArray);

  // Sort dates
  const sortedDatesArray = sortDatesArray(unsortedDatesArray);
  console.log(sortedDatesArray);

  // Format dates
  const formatedDatesArray = formatDatesArray(sortedDatesArray);
  console.log(formatedDatesArray);

  // Write dates to file
}

main();
