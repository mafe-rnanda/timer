//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

let arr = process.argv.slice(2);
//console.log(arr)

for (const element of arr) {
  let delay = element * 1000;
  setTimeout(() => {
    //process.stdout.write('\x07');
    process.stdout.write("BEEP");
  }, delay);
  setTimeout(() => {
    process.stdout.write("\n");
  }, (delay += 1));
}
