const array = [0, [1, [2, 3, [4, [5]], 6, [7, [8]]]]];

type Data<T> = (T | Data<T>)[];

const flatten = (data: Data<number>): number[] => {
  const result: number[] = [];
  data.forEach((arr: number | Data<number>) =>
    arr instanceof Array ? result.push(...flatten(arr)) : result.push(arr)
  );
  return result;
};

/*
const flatten = (data: Data<number>): number[] => [
  ...data.map((arr: number | Data<number>) =>
    Array.isArray(arr) ? flatten(arr) : arr
  ),
];
*/

console.log(array.flat(Infinity));
console.log(...flatten(array));

console.log([0, ...[1, ...[2, 3, ...[4, ...[5]], 6, ...[7, ...[8]]]]]);
