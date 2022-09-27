import { expect, test } from "vitest";
import { reverse } from "../src/Array/reverse";

test("reverse()", () => {
  expect(reverse()).toStrictEqual([]);
});

test("reverse([])", () => {
  expect(reverse([])).toStrictEqual([]);
});

test("reverse({})", () => {
  expect(reverse({})).toStrictEqual([]);
});

test("reverse(123)", () => {
  expect(reverse(123)).toStrictEqual([]);
});

test("reverse(123n)", () => {
  expect(reverse(123n)).toStrictEqual([]);
});

test("reverse('test')", () => {
  expect(reverse("test")).toStrictEqual([]);
});

test("reverse(false)", () => {
  expect(reverse(false)).toStrictEqual([]);
});

test("reverse(Symbol())", () => {
  expect(reverse(Symbol())).toStrictEqual([]);
});

test("reverse(() => {})", () => {
  expect(reverse(() => {})).toStrictEqual([]);
});

test("reverse([1,2,3,4])", () => {
  expect(reverse([1, 2, 3, 4])).toStrictEqual([4, 3, 2, 1]);
});
