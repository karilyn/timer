// retreiving command line data starting with the third line
// filtering out negative numbers, filtering out NaN
let input = process.argv.slice(2).filter(isPositive).filter(isNumber);

const isPositive = function(input) {
  if (input > 0) {
    return input;
  }
};

const isNumber = function(input) {
  if (isNaN(input)) {
    return;
  }
};

// makes a beep sound when called
const beep = () => {
  process.stdout.write('\x07');
};

input.forEach(timer => {
  // multiplying by 1000 assuming the numbers given are in seconds rather than milliseconds
  setTimeout(beep, timer * 1000);
});

