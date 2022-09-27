import { expect, test } from "vitest";
import { join } from "../src/Array/join";

test("join()", () => {
  expect(join()).toStrictEqual("");
});

test("join([])", () => {
  expect(join([])).toStrictEqual("");
});

test("join([], 123)", () => {
  expect(join([], 123)).toStrictEqual("");
});

test("join('123', 123)", () => {
  expect(join("123", 123)).toStrictEqual("");
});

test("join({}, '~')", () => {
  expect(join({}, "~")).toStrictEqual("");
});

test("join(123n, '~')", () => {
  expect(join(123n, "~")).toStrictEqual("");
});

test("join(Symbol(), '~')", () => {
  expect(join(Symbol(), "~")).toStrictEqual("");
});

test("join(false, '~')", () => {
  expect(join(false, "~")).toStrictEqual("");
});

test("join([1,2,3,4], '~')", () => {
  expect(join([1, 2, 3, 4], "~")).toStrictEqual("1~2~3~4");
});
