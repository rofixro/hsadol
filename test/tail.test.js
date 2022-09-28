import { expect, test } from "vitest";
import { tail } from "../src/Array/tail";

test("tail()", () => {
  expect(tail()).toStrictEqual([]);
});

test("tail([])", () => {
  expect(tail([])).toStrictEqual([]);
});

test("tail(123)", () => {
  expect(tail(123)).toStrictEqual([]);
});

test("tail(123n)", () => {
  expect(tail(123n)).toStrictEqual([]);
});

test("tail('test')", () => {
  expect(tail("test")).toStrictEqual([]);
});

test("tail(false)", () => {
  expect(tail(false)).toStrictEqual([]);
});

test("tail(Symbol())", () => {
  expect(tail(Symbol())).toStrictEqual([]);
});

test("tail(() => {})", () => {
  expect(tail(() => {})).toStrictEqual([]);
});

test("tail({})", () => {
  expect(tail({})).toStrictEqual([]);
});
