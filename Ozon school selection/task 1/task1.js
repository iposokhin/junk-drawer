const fs = require("fs");

getUniqNum("input-201.txt", "input-201.a.txt");

async function getUniqNum(inputFile, outputFile) {
  try {
    const buf = await readFile(__dirname + "/" + inputFile);
    const str = buf.toString();

    const nums = str
      .split("\n")
      .filter((i) => (!!i || i === 0) && typeof +i === "number" && !isNaN(i));

    const hasPairObj = nums.reduce((acc, num) => {
      return { ...acc, [num]: acc.hasOwnProperty(num) ? true : false };
    }, {});

    const found = Object.entries(hasPairObj).find(([key, val]) => !val);

    if (found) {
      const [numWithoutPair] = found;
      writeToFile(outputFile, +numWithoutPair);
    }
  } catch (e) {
    console.error(e);
  }
}

function readFile(path) {
  return new Promise((res, rej) =>
    fs.readFile(path, (err, data) => {
      if (err) throw Error(err);
      res(data);
    })
  );
}

function writeToFile(path, str) {
  return new Promise((res, rej) =>
    fs.writeFile(__dirname + "/" + path, str, (err, data) => {
      if (err) throw Error(err);
      res(data);
    })
  );
}
