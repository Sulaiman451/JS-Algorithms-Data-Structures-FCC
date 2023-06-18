function smallestCommons(arr) {
  // Get min and max
  const [min, max] = arr.sort((a, b) => a - b);
  let multiple = max;

  /* Loop over numbers in the range.
  If not divisble by max - min, then:
  Add the largest number to the multiple
  and start all over again but with the
  new largest number as the multiple*/
  for (let i = max; i >= min; i--) {
    if (multiple % i !== 0) {
      multiple += max;
      i = max;
    }
  }
  return multiple;
}

smallestCommons([1, 5]);

/* Original Problem

*/
