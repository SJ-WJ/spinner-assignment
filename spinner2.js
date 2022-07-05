const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let timeOut = 1;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char + '\r');
    // console.log('');
  }, timeOut * 200);
  timeOut ++;
}