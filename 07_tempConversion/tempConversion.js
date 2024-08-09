const convertToCelsius = function(fahrenheitTemp) {
  const celsiusTemp = (5 / 9) * (fahrenheitTemp - 32);
  return Number(celsiusTemp.toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {
  const fahrenheitTemp = (9 / 5) * celsiusTemp + 32;
  return Number(fahrenheitTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
