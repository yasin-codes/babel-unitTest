import { sum } from "../src/sum.js";

let counter = 0;

beforeEach(() => {
  console.log("before", counter);
});

afterEach(() => {
  console.log("after", ++counter);
});

test("number + number", () => {
  expect(sum(0, 0)).toBe(0);
});
