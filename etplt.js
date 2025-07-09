// etplt.js English to pig latin translator

// User input Words

const input = process.argv.slice(2).join(" ");

// console.log(input); //Test

const words = input.split(" "); //transfer to array

// console.log(words); //Test
const word = words[0];
const firstLetter = word[0].toLowerCase();

const vowels = "aeiou";

let pigLatinWords = [];

if (vowels.includes(firstLetter)) {
  pigLatinWords.push(words[0] + "way");
} else {
  pigLatinWords.push(words.slice(0) + word[0] + "ay");
}
console.log(pigLatinWords);
