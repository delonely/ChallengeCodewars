//PROBLEM
/**
 Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

 */

//TEST CASE
/**
 describe('rock paper scissors', function() {
  const getMsg = (n) => `Player ${n} won!`;

  it('player 1 win', function() {
    Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
    Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
    Test.assertEquals(rps('paper', 'rock'), getMsg(1));
  });

  it('player 2 win', function() {
    Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
    Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
    Test.assertEquals(rps('rock', 'paper'), getMsg(2));
  });

  it('draw', function() {
    Test.assertEquals(rps('rock', 'rock'), 'Draw!');
    Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
    Test.assertEquals(rps('paper', 'paper'), 'Draw!');
  });
});
 */

const rps = (p1, p2) => {
  //using object only for win condition
  const rpsRules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  //if draw then return draw
  if (p1 === p2) {
    return "Draw!";
  } else {
    return `Player ${rpsRules[p1] === p2 ? "1" : "2"} won!`;
  }
};

console.log(rps("paper", "rock"));
