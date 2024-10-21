import { helloAsync } from "../src/helloasync.js";

test("test async function", async () => {
  const result = await sayHelloAsync("Yasin");
  expect(result).toBe("Hello, Yasin!");
});
