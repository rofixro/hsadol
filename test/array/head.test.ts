import { assert, describe, it } from "vitest";
import { head } from "../../src/index";

describe("head", () => {
  it("head [] to equal undefined", () => {
    assert.equal(head([]), undefined);
  });

  it("head [1, 2, 3] to equal 1", () => {
    assert.equal(head([1, 2, 3]), 1);
  });
});
