import { expect, test } from "vitest";
import { drop } from "../src/Array/drop";

test("drop()", () => {
  expect(drop()).toStrictEqual([]);
})

test("drop([])", () => {
  expect(drop([])).toStrictEqual([]);
})

test("drop(123)", () => {
  expect(drop(123)).toStrictEqual([]);
})

test("drop(123n)", () => {
  expect(drop(123n)).toStrictEqual([]);
})

test("drop('test')", () => {
  expect(drop('test')).toStrictEqual([]);
})

test("drop(false)", () => {
  expect(drop(false)).toStrictEqual([]);
})

test("drop(Symbol())", () => {
  expect(drop(Symbol())).toStrictEqual([]);
})

test("drop({})", () => {
  expect(drop({})).toStrictEqual([]);
})

test("drop(() => {})", () => {
  expect(drop(() => { })).toStrictEqual([]);
})

test("drop([1, 2, 3], 2)", () => {
  expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
})

test("drop([1, 2, 3])", () => {
  expect(drop([1, 2, 3])).toStrictEqual([2, 3]);
})
