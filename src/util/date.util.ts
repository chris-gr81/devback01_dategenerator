import { getUnixTime, fromUnixTime, compareAsc, format } from "date-fns";

export function generateDatesArray(iteration: number): Date[] {
  const unsortedDates: Date[] = [];
  const max = getUnixTime(new Date()); // max is always the current unix-time
  const min = max - 315576000; // always 10 years before now

  for (let i = 1; i <= iteration; i++) {
    unsortedDates.push(
      fromUnixTime(Math.floor(Math.random() * (max - min + 1) + min)),
    );
  }
  console.log("Generating unsorted Date-Array");
  return unsortedDates;
}

export function sortDatesArray(datesArray: Date[]) {
  console.log("Sorting Date-Array");
  return datesArray.sort(compareAsc);
}

export function formatDatesArray(datesArray: Date[]) {
  console.log("Formating Date-Array");
  const formatedArray = datesArray.map((item) => {
    return format(item, "dd.MM.yyyy");
  });

  return formatedArray;
}
