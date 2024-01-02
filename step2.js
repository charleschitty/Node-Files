"use strict";

const fsP = require("fs/promises");

/** Receives a path to a file as an input, reads the file, and prints the
 * contents of that file or the error received if it fails to read said file.
 */
async function cat(path) {
  try {
    const contents = await fsP.readFile(path, "utf8");
    console.log("File Content: ", contents);

  } catch (err) {
    console.error(`Error reading ${path}: ${err}`);
    process.exit(1);
  }
}

/** Receives an url, if valid URL, print content of URL,
 * print error if invalid URL*/

async function webCat(url) {
  let response;

  try {
    const response = await fetch(url);

  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
  const respInHTML = await response.text();
  console.log("URL Content: ", respInHTML);
}

const path = process.argv[2];
URL.canParse(path) ? webCat(path) : cat(path);
