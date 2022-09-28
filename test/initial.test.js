import { expect, test } from "vitest";
import { initial } from "../src/Array/initial";

test("initial()", () => {
  expect(initial()).toStrictEqual([]);
})

test("initial([])", () => {
  expect(initial([])).toStrictEqual([]);
})

test("initial({})", () => {
  expect(initial({})).toStrictEqual([]);
})

test("initial(123)", () => {
  expect(initial(123)).toStrictEqual([]);
})

test("initial(123n)", () => {
  expect(initial(123n)).toStrictEqual([]);
})

test("initial('test')", () => {
  expect(initial('test')).toStrictEqual([]);
})

test("initial(false)", () => {
  expect(initial(false)).toStrictEqual([]);
})

test("initial(Symbol())", () => {
  expect(initial(Symbol())).toStrictEqual([]);
})

test("initial(() => {})", () => {
  expect(initial((() => { }))).toStrictEqual([]);
})
