let time = 100;
const interval = 200;
const length = 10;
for (i = 0; i < length; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, time);
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, (time += interval));
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, (time += interval));
  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, (time += interval));
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, (time += interval));
}
