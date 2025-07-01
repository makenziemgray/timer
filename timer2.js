// Enable stdin stream
process.stdin.setRawMode(true);
process.stdin.setEncoding("utf8");

console.log("Timer is running. Press a number 1-9 to set a timer, or press 'b' to beep. Press Ctrl+C to exit.");

// Listen for key presses
process.stdin.on("data", (key) => {
  if (key === "b") {
    // Immediate beep
    process.stdout.write("\x07");
  } else if (key >= "1" && key <= "9") {
    const seconds = Number(key);
    console.log(`Setting timer for ${seconds} second(s)...`);

    setTimeout(() => {
      process.stdout.write("\x07");
    }, seconds * 1000);
  } else if (key === "\u0003") {
    // Ctrl+C (ETX)
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});