

//Iteration 1: Names and Input

let hacker1 = "Hermengildo";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Norberta";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else console.log("Wow, you both have equally long names, " + hacker2.length + " characters.");

// Iteration 3: Loops 
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let newStr = "";
for (let i = 0; i < hacker1.length; i++) {
    newStr += hacker1[i] + " ";
    console.log(newStr.toUpperCase())
}

let newStr2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    newStr2 += hacker2[i];
    console.log(newStr2)
}

let arr = [hacker1, hacker2];

for (let i = 0; i < arr.length; i++) {
    if (hacker1 > hacker2) {
        console.log("The driver's name goes first.")
    } else if (hacker1 < hacker2) {
        console.log("Yo, the navigator goes first definitely")
    } else console.log("What?! You both have the same name?")
}

