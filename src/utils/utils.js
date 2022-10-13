
export function  getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function range(start, end, step) {
  var rangeArray = new []();
  while (start < end) {
    rangeArray.push(start);
    start += step;
  }
  return rangeArray;
}

export function getRandomLocation() {
  var choices = range(200, 400, 50);
  return choices[Math.floor(Math.random() * choices.length)];
}

