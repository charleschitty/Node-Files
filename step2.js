"use strict";

const fsP = require("fs/promises");

/** Receives a path to a file as an input, reads the file, and prints the
 * contents of that file or the error received if it fails to read said file.
 */
async function cat(path){
  try  {
    let contents = await fsP.readFile(path, "utf8");
    console.log("file contents: ", contents);

  } catch (err) {
    console.log(`Error reading ${path}: ${err}`);
    process.exit(1);
  }
}

// cat(process.argv[2]);

/** Receives an url, if valid URL, print content of URL . */

async function webCat(url){
  try{
  const response = await fetch(url);
  let respInHTML = await response.text();
  console.log("Content: ", respInHTML);
  } catch(err) {
    console.log(`Error fetching ${url}: ${err}`);
    process.exit(1);

  }
}
let path = process.argv[2];
URL.canParse(path) ? webCat(path) : cat(path);
