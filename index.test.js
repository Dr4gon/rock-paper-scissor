const rockPaperScissors = require("./index");

test("Rock beats scissors", () => {
  expect(rockPaperScissors("rock", "scissors")).toBe("Player 1 won!");
});

test("Scissors beats paper", () => {
  expect(rockPaperScissors("scissors", "paper")).toBe("Player 1 won!");
});

test("Paper beats rock", () => {
  expect(rockPaperScissors("paper", "rock")).toBe("Player 1 won!");
});
