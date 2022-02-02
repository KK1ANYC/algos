var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1 &&
      flowerbed[i] !== 1
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }
  if (n <= 0) return true;
  else return false;
};
