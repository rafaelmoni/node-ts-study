/*
const map = new Map<number, number>();
for (let i = 0; i < nums.length; i++) {
  const diff = target - nums[i];
  if (map.has(diff)) {
    return [map.get(diff)!, i];
  }
  map.set(nums[i], i);
}
return [];
*/

const twoSumBrute = (nums: number[], target: number): number[] => {
  const sumTable: any = {};
  nums.forEach((v, i) => {
    sumTable[i] = {};
    nums.forEach((v2, i2) => {
      if (i !== i2) sumTable[i][i2] = v + v2;
    });
  });
  // console.log("sumTable", sumTable);
  let result: number[] = [];
  // for i of object = iterable object
  // for i in object = any object
  for (const i in sumTable) {
    for (const i2 in sumTable[i]) {
      if (sumTable[i][i2] === target) {
        result = [parseInt(i), parseInt(i2)];
        break;
      }
    }
    if (result.length) break;
  }
  return result;
};

const twoSumOptimizedV1 = (nums: number[], target: number): number[] => {
  const sumTable: { [key: string]: number } = {};
  nums.forEach((v, i) => {
    nums.forEach((v2, i2) => {
      if (i !== i2) {
        const k = i + "," + i2;
        if (!sumTable[k]) sumTable[k] = v + v2;
      }
    });
  });
  // console.log("sumTable", sumTable);
  const result: number[] =
    Object.keys(sumTable)
      .find((k) => (sumTable[k] === target ? k : []))
      ?.split(",")
      .map((v) => parseInt(v)) || [];
  // console.log("result", result);
  return result;
};

const twoSumOptimizedV2 = (nums: number[], target: number): number[] => {
  const sumTable = new Map();
  nums.forEach((v, i) => {
    nums.forEach((v2, i2) => {
      if (i !== i2) {
        const k = i + "," + i2;
        if (!sumTable.get(k)) sumTable.set(k, v + v2);
      }
    });
  });
  let result;
  for (const [k, v] of sumTable.entries()) {
    if (v === target) {
      result = k.split(",").map((i: string) => parseInt(i));
      break;
    }
  }
  return result;
};

const twoSumOptimizedV3 = (nums: number[], target: number): number[] => {
  const sumTable = new Map();
  nums.forEach((v, i) => {
    nums.forEach((v2, i2) => {
      if (i !== i2) {
        const k = v + v2;
        sumTable.set(k, [...(sumTable.get(k) ?? []), [i, i2]]);
      }
    });
  });
  let result;
  for (const [v, k] of sumTable.entries()) {
    if (v === target) {
      result = k[0];
      break;
    }
  }
  return result;
};

const twoSumNestedLoops = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
};

const twoSum = twoSumNestedLoops;

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // [0, 1]
