import { assert, describe, it } from "vitest";
import { join } from "../../src/index";

describe("join", () => {
  it("join([]) to equal ''", () => {
    assert.equal(join([]), "");
  });

  it("join([1, 2, 3]) to equal -", () => {
    assert.equal(join([1, 2, 3], "-"), "1-2-3");
  });
});
