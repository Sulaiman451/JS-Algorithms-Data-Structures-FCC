function factorialize(num) {
  /* Since return values for the function will always be greater than or equal to 1, 
  the product is initialised at 1. When num = 0, the for loop condition will be false, 
  but since product = 1, it will have the correct value when the return statement is 
  executed. */
  let product = 1;
  /* Initialise i at num, run the loop if i is greater than 0, decrease i by 1 each
  time the code block in the loop has been executed */
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
}

factorialize(5);

/* Consider num = 5. In this function, product is initialised at 1. In the for loop, 
we have i = 5, 5 > 0 so the loop will run. Product has been declared with let, so 
it is mutable. Since this is the case, product can be reassigned here as product = 1 * 5. 
Then, the code block runs again at i = 4 after i has been decremented. 4 > 0 so the loop 
will run. From the previous execution, product is 5. So, we get product = 5 * 4 which is 
20 Then, i = 3, 3 > 0, product = 20 * 3 which is 60. i = 2, 2 > 0, product = 60 * 2 
which is 120. i = 1, 1 > 0, product = 120 * 1 so product is 120. Then, i = 0, 0 = 0, so 
the loop will no longer run. Hence, we have a function that  runs 5! which is indeed 120. */

/* Original Problem
function factorialize(num) {
  return num;
}

factorialize(5);
*/
