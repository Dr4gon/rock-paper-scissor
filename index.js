/** What's with Lizard and Spock? */
const rps = (p1, p2) => {
  switch (true) {
    case p1 === p2:
      return "Draw!";
    case (p1 === "rock" && p2 === "scissors") ||
      (p1 === "paper" && p2 === "rock") ||
      (p1 === "scissors" && p2 === "paper"):
      return "Player 1 won!";
    default:
      return "Player 2 won!";
  }
};
