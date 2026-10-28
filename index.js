function greet(message) {
  if (!message) throw new Error("Message required");
  if (typeof message !== "string")
    throw new Error(`${message} has to be a string`);

  return message;
}
