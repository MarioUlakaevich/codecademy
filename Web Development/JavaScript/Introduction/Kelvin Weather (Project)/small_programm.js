//constant in Kelvin
const kelvin = 293;
//convert kelvine in celsius
var celsius = kelvin - 273;
//convert celsuis in fahrenheit
var fahrenheit = celsius * (9/5) + 32;
//round the number of fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit.`);
//celsius in newton
var newton = celsius * (33/100);
//round newton
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees in Newton.`);