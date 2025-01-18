const n = [1, 2, 3, 4];

const rob = (nums: number[]): number => {
  let rob1 = 0;
  let rob2 = 0;
  nums.forEach((n, i) => {
    if (i % 2 === 0) {
      rob1 += n;
    } else {
      rob2 += n;
    }
  });

  return rob1 > rob2 ? rob1 : rob2;
};

console.log(rob(n));
