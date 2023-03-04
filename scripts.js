// numbers
let age = 2023 - 1982;
console.log(`I have a ${age} yo`);

let ww2 = 1945 - 1939;
console.log(`WW2 lasted ${ww2} years`);

let tesla = 197.79 * 76;
console.log(`76 Tesla's cost ${tesla.toFixed(2)}$`);

let secondOfDay = 24 * 60 * 60;
console.log(`We have a ${secondOfDay} seconds in a day`);

let hungarians = 9632744;
let chine = 9597000;
let czechia =  78870;
let bigger = chine / czechia;
console.log(`Chine is ${bigger.toFixed(2)} times bigger then Czechia`);

let participants = 654 / 7;
console.log(Math.ceil(participants));

// strings
// arrays
let names = ["Steve", "Feri", "Juro", "Peto", "Janka"]

let longer = names[2].length > names[4].length;
console.log(longer);

names.push("Greenfox");

names[0] = "Stevenson";

let more4 = names.length > 4
  console.log(more4);

// objects
let object = {
  colors: ["blue", "red", "yellow", "orange", "greeen"],
  hasManyColors: "",
}
if (object.colors.length >= 3) {
  object.hasManyColors = true;
} else {
  object.hasManyColors = false;
}
console.log(object);