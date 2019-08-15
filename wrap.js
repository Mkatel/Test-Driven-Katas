// function wrap(string, number) {
//   if (string.length <= number) {
//     return string;
//   }
// }

function wrap(string, number) {
  if (string.length <= number || number === 0) {
    return string;
  }

  const indexOfBlank = string.lastIndexOf(' ', number);
  let split;
  let offset;
  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else {
    split = number;
    offset = 0;
  }
  return (
    string.substring(0, split) +
    '\n' +
    wrap(string.substring(split + offset), number)
  );
}

module.exports = wrap;
