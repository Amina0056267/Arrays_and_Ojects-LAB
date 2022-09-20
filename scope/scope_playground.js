numbers = [1, 2, 3, 4, 5];

let numberToPrint = 0;

for(let number of numbers){
    numberToPrint = number;
    console.log("value of number inside loop ", numberToPrint);
}

// console.log("value of number outside loop: ", number);
console.log("value of numberToPrint outside loop: ", numberToPrint);

const numbersSquared = [];

for(const number of numbers){
    numbersSquared.push(number ** 2);
}

console.log(numbersSquared);

const myFunction = () => {
    if (true){
        var variable1 = "will print because var has function scope";
        let variable2 = "will NOT print because let has blocked scope";

    }
console.log(variable1); // will work
console.log(variable2); //will NOT work

}

myFunction();