process.stdin.on("readable", () => {
  let chunk;

  while ((chunk = process.stdin.read()) !== null) {
    let [num1, num2] = chunk.toString().split(" ");
    const result = sum(num1, num2);

    process.stdout.write(result);
  }
});

function sum(num1, num2) {
  num1 = [...num1].reverse();
  num2 = [...num2].reverse();
  let result = [];

  for (let rank = 0; rank < num2.length; ++rank) {
    const rankSum = toNum(num1[rank]) + toNum(num2[rank]);
    const hasCarry = rankSum > 9;

    if (hasCarry) {
      result[rank] = rankSum - 10;
      num2[rank + 1] = toNum(num2[rank + 1]) + 1;
    } else {
      result[rank] = rankSum;
    }
  }

  return result.reverse().join("");
}

function toNum(num) {
  return ~~num;
}
