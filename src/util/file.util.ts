import fs from "fs";

export function writeTXTfile(
  data: string[],
  fileName: string,
  filePath?: string,
): void {
  const path = filePath || `${__dirname}/../../output/`;

  try {
    data.push("----------\n"); // adding seperator between entries
    fs.writeFileSync(`${path}${fileName}`, data.join("\n"), { flag: "a" });
  } catch (err) {
    console.log(`Writing files to data.txt went wrong: ${err}`);
  }
  console.log("File written successfully");
}
