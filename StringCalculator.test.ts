import StringCalculator from "./StringCalculator";

test("should calculate the sum of positive numbers", () => {
  expect(StringCalculator("1,2,3")).toBe(6);
});
