self.onmessage = function (event) {
  let i = 0;
  while (i < 10000000000) {
    i++;
  }
postMessage(JSON.parse(JSON.stringify(event)))
};
