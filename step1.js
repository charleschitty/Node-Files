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
    console.log("Error: ", err);
    process.exit(1);
  }
}

cat(process.argv[2]);

// cat("one.txt");
// cat("huh.txt");