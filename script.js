'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age} years old!`;
    console.log(output);
  }

  printAge();
}
const firstName = 'Kshitij';
calcAge(2000);
