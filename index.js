// Code your solutions in this file
function writeCards(names, event) {
  let array = [];
  for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`,)
  }
  return array;
}

const result = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(result);

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

countDown(10);
