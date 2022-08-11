import curry from "lodash-es/curry";
import { random, sum } from "lodash-es";

interface SetDiceMax<T1, R> {
  (): SetDiceMax<T1, R>;
  (diceMax: T1): R;
}
interface Roll<T1, T2, R> {
  (): Roll<T1, T2, R>;
  (diceMax: T1): SetDiceMax<T2, R>;
  (diceSum: T1, diceMax: T2): R;
}

type result = {
  total: number;
  numbers: number[];
};

type roll = Roll<number, number, result>;

/** roll a dice */
const roll: roll = curry((diceSum: number, diceMax: number) => {
  const nums: number[] = [];
  for (let i = 0; i < diceSum; i++) nums.push(random(1, diceMax));
  return {
    total: sum(nums),
    numbers: nums,
  };
}) as unknown as roll;

export { roll };
export default roll;
