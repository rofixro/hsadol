import { expect, test } from "vitest";
import { join } from "../src/Array/join";

test("join()", () => {
  expect(join()).toBe("");
});

test("join([])", () => {
  expect(join([])).toBe("");
});

test("join([], 123)", () => {
  expect(join([], 123)).toBe("");
});

test("join('123', 123)", () => {
  expect(join("123", 123)).toBe("");
});

test("join({}, '~')", () => {
  expect(join({}, "~")).toBe("");
});

test("join(123n, '~')", () => {
  expect(join(123n, "~")).toBe("");
});

test("join(Symbol(), '~')", () => {
  expect(join(Symbol(), "~")).toBe("");
});

test("join(false, '~')", () => {
  expect(join(false, "~")).toBe("");
});

test("join([1,2,3,4], '~')", () => {
  expect(join([1, 2, 3, 4], "~")).toBe("1~2~3~4");
});
