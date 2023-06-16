function pairElement(str) {
  // Encapsulating array
  let pairedArr = [];

  // Paired element (return matching element)
  let pairCheck = (letter) => {
    if (letter === "A") {
      return "T";
    } else if (letter === "T") {
      return "A";
    } else if (letter === "C") {
      return "G";
    } else if (letter === "G") {
      return "C";
    }
  };

  /* Method for iterating through each letter and inputting each individual character,checking what
  it should be paired with, and pushing both of those as one array */
  for (let letter of str) {
    pairedArr.push([letter, pairCheck(letter)]);
  }

  return pairedArr;
}

pairElement("GCG");

/*
function pairElement(str) {
  return str;
}

pairElement("GCG");
*/
