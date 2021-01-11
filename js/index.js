//Iteration 1: Names and Input

let hacker1 = "Hermengildo";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Norberta";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else if (hacker1.length < hacker2.length){
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else console.log("Wow, you both have equally long names, " + hacker2.length + " characters.");

// Iteration 3: Loops 
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let newStr = "";
for (let i = 0; i < hacker1.length; i++){
  newStr += hacker1[i] + " ";
  console.log(newStr.toUpperCase())
}

let newStr2 = "";
for (let i = hacker2.length-1; i >= 0; i--){
  newStr2 += hacker2[i];
  console.log(newStr2)
}

let arr = [ hacker1, hacker2];

for (let i = 0; i < arr.length; i++){
  if (hacker1 > hacker2){
    console.log("The driver's name goes first.")
  } else if (hacker1 < hacker2){
    console.log("Yo, the navigator goes first definitely")
} else console.log("What?! You both have the same name?")
}
// bonus 1 

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est tortor, tincidunt vel eros vel, tincidunt auctor massa. Nulla sed lobortis ligula. Phasellus efficitur dapibus auctor. Suspendisse vel augue sem. Aenean sit amet pellentesque orci, id dictum lectus. Vestibulum quis purus vitae felis ullamcorper varius. Integer tempus sit amet enim ut lobortis. Sed posuere neque vel dolor tincidunt rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Pellentesque at nisl non magna vehicula bibendum. Etiam placerat ipsum nec posuere consequat. Praesent condimentum porta tellus, ac malesuada mi faucibus id. Duis tempus lacus leo, vitae ultricies dolor feugiat vel. Fusce eget mi enim. Aliquam eleifend nisl vel nulla facilisis, sit amet hendrerit lacus facilisis. Etiam congue placerat nisl, a condimentum libero condimentum at. Fusce sed placerat nunc. Cras justo magna, hendrerit eu odio eu, accumsan auctor augue. Curabitur vitae sodales velit.

Etiam quam purus, blandit eu venenatis ut, fermentum in risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ullamcorper dapibus consectetur. Phasellus interdum consectetur ullamcorper. Vestibulum egestas volutpat sem vel facilisis. In imperdiet imperdiet justo, eu convallis nulla tristique non. Vestibulum eget accumsan justo. Donec quis nisl vel mi tristique gravida et eget nibh. Vestibulum non est urna. Nullam nec fringilla justo, eu bibendum ex. Fusce pharetra nunc velit, ut lacinia enim ultrices sed. Sed ullamcorper velit sit amet tortor ultrices euismod.`

let loremArr = loremIpsum.split(' ')

console.log(loremArr.length);

let etWord = 0;
for (let i = 0; i < loremArr.length; i++){
  if (loremArr[i] === "et"){
    etWord++;
  }

}
  console.log(etWord)


