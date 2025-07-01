// Get command-line arguments, skipping the first two (node and script path)
const args = process.argv.slice(2);

// Convert to numbers and filter out invalid entries
const validTimers = args
  .map(Number)
  .filter(time => !isNaN(time) && time > 0);

// Schedule a beep for each valid time
for (const time of validTimers) {
  setTimeout(() => {
    process.stdout.write('\x07'); // system beep
    console.log(`⏰ Beep at ${time} second(s)`);
  }, time * 1000);
}

/* edge cases

1. node timer1.js - No output, exits immediately
2. node timer1.js -3 - Skipped (negative)
3. node timer1.js abc 5 - abc skipped, beep at 5 seconds
4. node timer1.js 0 7 10 - 0 skipped, beep at 7 and 10 sec */