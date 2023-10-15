/*
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.

Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
*/

/*
export const minCostClimbingStairs = (cost: number[], log = false): number => {
  if (!log) console.log = () => {};
  const lastIndex = cost.length - 1;

  const loopThrough = (start: number) => {
    console.log("running on", JSON.stringify(cost), { start });
    let totalCost = 0;
    let canJump = start === 0;

    for (let i = start; i < cost.length; i++) {
      console.log();
      console.log("i:", i);
      const current = cost[i];
      const next = cost[i + 1];
      const latest = cost[i + 2] || 0;

      if (i === 0)
        console.log({
          canJump,
          current,
          next,
          latest,
          first: current >= next && next <= current + latest,
          second: current + latest > next,
          third: current + latest > next && i + 2 === lastIndex,
        });

      if (
        canJump &&
        (current >= next ||
          (current + latest > next && i + 2 === lastIndex) ||
          i === lastIndex)
      ) {
        console.log("jumped i:", current);
        canJump = false;
        continue;
      }
      console.log("adding:", current);
      totalCost += current;
      canJump = true;
    }

    return totalCost;
  };

  const i0 = loopThrough(0);
  const i1 = loopThrough(1);

  console.log("i0", i0);
  console.log("i1", i1);

  return i0 > i1 ? i1 : i0;
};

//console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1], true));
//console.log(minCostClimbingStairs([0, 1, 2, 2], true));
//console.log(minCostClimbingStairs([1, 2, 2, 2], true));
*/

//The solution above consider analysis between the next two steps, which is not (wasn't supposed to be) the real objective of the exercise
//I think it lacks more detailed informations...

export const minCostClimbingStairs = (cost: number[]): number => {
  //const getCosts = (index: number) => {
  //  let total = 0;
  //  for (let i = index; i < cost.length; i++) {
  //    total += cost[i] > cost[i + 1] ? cost[i + 1] : cost[i];
  //  }
  //  return total;
  //};

  //const t0 = getCosts(0);
  //const t1 = getCosts(1);

  //return t0 > t1 ? t1 : t0;

  console.log("start:", JSON.stringify(cost));
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 2], cost[i - 1]);
    console.log("cost:", JSON.stringify(cost));
  }

  console.log({
    a: cost[cost.length - 1],
    b: cost[cost.length - 2],
  });

  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};
