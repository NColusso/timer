timerArray = process.argv.slice(2)

const timer = function (timerArray) {
  for (const time of timerArray) {
    if (timerArray.length > 0 && time > 0)
    setTimeout(() => {
      process.stdout.write('\x07')
    }, time * 1000);
  }
}

timer(timerArray)