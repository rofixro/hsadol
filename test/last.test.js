import { expect, test } from "vitest";
import { last } from "../src/Array/last";

test("last()", () => {
  expect(last()).toBe(undefined);
});

test("last([1, 2, 3])", () => {
  expect(last([1, 2, 3])).toBe(3);
});

test("last(123)", () => {
  expect(last(123)).toBe(undefined);
});

test("last(123n)", () => {
  expect(last(123n)).toBe(undefined);
});

test("last(false)", () => {
  expect(last(false)).toBe(undefined);
});

test("last('test')", () => {
  expect(last("test")).toBe("t");
});

test("last(Symbol())", () => {
  expect(last(Symbol())).toBe(undefined);
});

test("last(() => {})", () => {
  expect(last(() => {})).toBe(undefined);
});

test("last({})", () => {
  expect(last({})).toBe(undefined);
});

test("last(new Date())", () => {
  expect(last(new Date())).toBe(undefined);
});
