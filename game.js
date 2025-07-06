// Player input
const input = process.argv.slice(2);
// console.log(input);

const pMove = input[0].toLowerCase();

//console.log(playerMove);
//computer moves
const moves = ["rock", "paper", "scissors"];
// catch invalid input
if (pMove !== "rock" && pMove !== "paper" && pMove !== "scissors") {
  /*for (let i = 0; i < 10; i++) {
    process.stdout.write("\x07");
    console.log(`beep ${i}`);
  }*/

  console.log(
    `${pMove} is an invalid move. Please choose ${moves.join(" or ")}.`
  );
  return;
}
//console.log(moves);
// chose computer move
let cMove = moves[Math.floor(Math.random() * 3)];

//console.log(cMove);

//Output

console.log(`You chose ${pMove}. Computer chose ${cMove}.`);

if (pMove === cMove) {
  console.log("You draw!");
} else if (
  (pMove === "paper" && cMove === "rock") ||
  (pMove === "scissors" && cMove === "paper") ||
  (pMove === "rock" && cMove === "scissors")
) {
  console.log("You win!");
} else if (
  (pMove === "rock" && cMove === "paper") ||
  (pMove === "paper" && cMove === "scissors") ||
  (pMove === "scissors" && cMove === "rock")
) {
  console.log("You lose!");
}
