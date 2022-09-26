import { expect, test } from "vitest";
import { compact } from "../src/Array/compact";

test("compact()", () => {
  expect(compact()).toStrictEqual([]);
});

test("compact([])", () => {
  expect(compact([])).toStrictEqual([]);
});

test("compact(123)", () => {
  expect(compact(123)).toStrictEqual([]);
});

test("compact(123n)", () => {
  expect(compact(123n)).toStrictEqual([]);
});

test("compact('test')", () => {
  expect(compact("test")).toStrictEqual([]);
});

test("compact(false)", () => {
  expect(compact(false)).toStrictEqual([]);
});

test("compact(Symbol())", () => {
  expect(compact(Symbol())).toStrictEqual([]);
});

test("compact({})", () => {
  expect(compact({})).toStrictEqual([]);
});

test("compact(0, '', NaN, null, undefined, false)", () => {
  expect(compact(0, "", NaN, null, undefined, false)).toStrictEqual([]);
});
