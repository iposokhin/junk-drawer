const fs = require("fs");

const stream = fs.createReadStream("./input.txt", { highWaterMark: 500 });
let target = null;
let prevChunkEndsWithSpace = false;
let prevChunkLastNumber = "";
let obj = {};
let result = "0";

stream.on("data", (buf) => {
  let string = buf.toString();

  if (!target) {
    const match = string.match(/(\d+)\s?\n/);
    const matchLength = match ? match[0].length : 0;

    target = match && parseInt(match[1]);
    string = string.slice(matchLength);
  }

  if (!prevChunkEndsWithSpace) {
    string = prevChunkLastNumber.toString().concat(string);
  }

  const currentChunkEndsWithSpace =
    string.endsWith(" ") || string.endsWith("\n");

  let numsArr = string
    .split(" ")
    .filter((num) => (!!num && num !== "\n") || num === 0)
    .map(Number);

  if (!currentChunkEndsWithSpace) {
    const numsArrLength = numsArr.length;

    if (numsArrLength > 0) {
      prevChunkLastNumber = numsArr[numsArrLength - 1];
      numsArr = numsArr.slice(0, -1);
    } else {
      prevChunkLastNumber = "";
      numsArr = [];
    }
  }

  prevChunkEndsWithSpace = currentChunkEndsWithSpace;

  for (let i = 0; i < numsArr.length; i++) {
    let num = numsArr[i];

    if (num > target) {
      continue;
    }

    if (obj.hasOwnProperty(num)) {
      result = "1";
      stream.destroy();
      break;
    }
    obj[target - num] = num;
  }
});

stream.on("close", () => {
  writeToFile("./output.txt", result);
});

function writeToFile(path, str) {
  return new Promise((res, rej) =>
    fs.writeFile(__dirname + "/" + path, str, (err, data) => {
      if (err) throw Error(err);
      res(data);
    })
  );
}
