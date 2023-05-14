let count = 0;

function cc(card) {
  switch (card) {
    /* These are the high cards. Each high card has a count change of +1, hence the increment operator at the end of the cases. */
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    /* The cards with values 7, 8, or 9 are not included in the code as they have a count change of 0 - they are unnecessary since 
    they have no effect on the count. */

    /* These are the low cards which have a count change of -1, hence the decrement operator at the end. */
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count > 0) {
    /* A very common mistake on existing solutions to this challenge is that they miss out a space before the bet or hold keyword. 
    If there is no space, the site will not accept the answer. An errow will be thrown. 
    
    This is because it needs "count Bet/Hold" as the output. If there is no space, the output will be "countBet/Hold", which will 
    register as incorrect. That is why a lot of people on the FCC forum got stuck despite their code looking correct at a first 
    glance. 
    
    I was stuck until I found the solution on FCC's YouTube where return count + " " (for space, but a separate string for space is unnecessary) + holdbet 
    (a variable that I have not used in this solution because it adds unnecessary complexity in my opinion). */

    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

/* Original Challenge
let count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
*/
