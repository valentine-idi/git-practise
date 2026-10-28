function multiply(num1, num2) {
  if (!num1 || !num2) throw new Error("Please enter 2 numbers to be added");
  if (typeof num1 !== "number" || typeof num2 !== "number") return num1 * num2;
}
