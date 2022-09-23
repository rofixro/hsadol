import { head } from "../src/Array/head";
import { expect, test } from "vitest";

test("head()", () => {
  expect(head()).toBe(undefined);
});

test("head([])", () => {
  expect(head([])).toBe(undefined);
});

test("head([1, 2, 3])", () => {
  expect(head([1, 2, 3])).toBe(1);
});

test("head(123)", () => {
  expect(head(123)).toBe(undefined);
});

test("head(123n)", () => {
  expect(head(123n)).toBe(undefined);
});

test("head('test')", () => {
  expect(head("test")).toBe("t");
});

test("head(true)", () => {
  expect(head(true)).toBe(undefined);
});

test("head(Symbol())", () => {
  expect(head(Symbol())).toBe(undefined);
});

test("head({})", () => {
  expect(head({})).toBe(undefined);
});

test("head(new Date())", () => {
  expect(head(new Date())).toBe(undefined);
});

test("head(() => {})", () => {
  expect(head(() => {})).toBe(undefined);
});
