const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program 
// should say "Thanks for using me, ciao!" before terminating

rl.question(`Welcome to the timer! 
Entering 'b' will cause the timer to go off right away.
Entering a number 1 through 9 will set a timer for that number of seconds. 
'ctrl c' or 'exit' will exit. 'yes' to continue. 
`, (yes) => {
  console.log(`You entered: ${yes}.`)
  if (yes === "exit") {
    rl.close()
  }
})

rl.on("line", (input) => {
  if (input.toLowerCase() === "b") {
    process.stdout.write('\x07')
  } else if (input > 0 && input <= 9) {
    console.log(`Setting a timer for ${input} seconds..`)
    setTimeout(() => {
      process.stdout.write('\x07')
    }, input * 1000);
  } else if (input === "exit") {
    rl.close()
  } else {
    console.log("Please input a valid number, or 'exit'")
  }
})

rl.on("close", () => {
  console.log(`Thanks for using me. Ciao!`)
})

