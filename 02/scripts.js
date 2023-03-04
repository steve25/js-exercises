// from 1 to 10
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

// evens 0 to 20 with function
let printNumbers = (number) => {
  for (let q = 0; q < number; q++) {
    if (q % 2 == 0) {
      console.log(q);
    }
  }
}

printNumbers(40);


// greeting function
let greeting = (name) => {
  return "Hello " + name;
}

console.log(greeting('Steve'));

// for loops and arrays
let printValues = (values) => {
  values.forEach(value => {
    console.log(value);
  });
  // for (let i = 0; i < values.length; i++) {
  //   console.log(values[i]);   
  // }
}
printValues([0, 3, 6, 7, 9]);

//forEach
let numbers = [10, 20, 30, 50, 12];
numbers.forEach(number => {
  console.log(number);
});