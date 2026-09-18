const convertToCelsius = function(tempFahr) {
  /*  Subtract 32 from degrees Fahrenheit
      Divide the result by 1.8 (or 9/5)
  */
  let output = (tempFahr - 32) / 1.8;
  return Math.round(output * 10) / 10;
};

const convertToFahrenheit = function(tempCel) {
  /*  Multiply degrees Celsius by 1.8 (or 9/5)
      Add 32 to the product from step 1
  */
  let output = (tempCel * 1.8) + 32;
  return Math.round(output * 10) / 10;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
