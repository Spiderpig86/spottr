let c = document.querySelector("#splash");
let $ = c ? c.getContext("2d") : null;

let col = function (x, y, r, g, b) {
  if ($) {
    $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    $.fillRect(x, y, 1, 1);
  }
};

let R = function (x, y, t) {
  return Math.floor(150 + 64 * Math.cos((x * x - y * y) / 300 + t));
};

let G = function (x, y, t) {
  return Math.floor(
    30 +
      64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
  );
};

let B = function (x, y, t) {
  return Math.floor(
    220 +
      64 *
        Math.sin(
          5 * Math.sin(t / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
  );
};

let t = 0;

let run = function () {
  for (x = 0; x <= 35; x++) {
    for (y = 0; y <= 35; y++) {
      col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
    }
  }
  t = t + 0.002;
  window.requestAnimationFrame(run);
};

run();
