// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const text = "hello there I'm adding this text";

fs.appendFile("hello.txt", text, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(`"${text}" was appended to hello.txt`);
});
