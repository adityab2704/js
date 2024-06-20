// Older way
let isAllowedToVote;
let age = 18;

if (age >= 18) {
  isAllowedToVote = true;
} else {
  isAllowedToVote = false;
}

console.log({ isAllowedToVote });

// If Nested
if (age >= 18) {
  if (age === 18) {
    console.log("Now, they can vote for the first time");
  } else {
    console.log("Can vote");
  }
} else {
  console.log("Can not vote");
}

// Ternary Way : Medium

const canVote = age >= 18 ? "Can Vote" : "Can not vote";
const canVoteV2 =
  age >= 18
    ? age === 18
      ? "Now okay, & allowed to vote"
      : "Can vote"
    : "Can not vote";

console.log({ canVote, canVoteV2 });

// Ternary
