// PRIMITIVE TYPE
const number: number = 8;
const names: string = "Samar";
const haCar: boolean = false;
const not: null = null;
const undf: undefined = undefined;
const now: Date = new Date();

// REFERENCE TYPE
// array
const fruit: string[] = ["Apple", "Banana", "Strawberry"];
const num: number[] = [1, 2, 3, 4, 5];
const isMarried: boolean[] = [true, false];

// object
const car: { name: string; color: string; isAirBag: boolean } = {
  name: "BMW",
  color: "Black",
  isAirBag: false,
};

// class
class Car {}
const mers: Car = new Car();

//function
const logger: (names: string) => void = (names: string) => {
  console.log(names);
};

let cosmos;
cosmos = 8;

// ANY
const objJSON = '{"x" : 10, "y" : 8}';
const coordinate: { x: number; y: number } = JSON.parse(objJSON);

const numbersTest = ["one", "three", "five"];
let isCurrent: boolean;

for (let i = 0; i < numbersTest.length; i++) {
  if (numbersTest[i] === "one") {
    isCurrent = true;
  }
}

const testNumber = [-99, -6, 8];
let positive: boolean | number = false;
for (let i = 0; i < testNumber.length; i++) {
  if (testNumber[i] > 0) {
    positive = testNumber[i];
  }
}
