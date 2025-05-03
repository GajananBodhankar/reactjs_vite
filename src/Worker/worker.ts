onmessage = function (e) {
  let count = 0;
  while (count < 1000000000) {
    count++;
  }
  postMessage(count);
};
