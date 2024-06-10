const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result2) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result2;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first} and ${second}`,
      (err, result3) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting the next start");
