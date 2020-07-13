function longestsequence(seq) {
  //highest value
  let max = 1;
  //initial count
  let count = 0;
  let letter = "";
  //loop through each letter
  for (let i = 1; i < seq.length; i++) {
    //if letter is the same as before then increase count
    if (seq[i] === seq[i - 1]) count++;
    else {
      // if current count is higher than max recorded value, update it
      if (count > max) {
        max = count;
        letter = seq[i - 1];
      }
      count = 1;
    }
  }
  return "{" + letter + ":" + max + "}";
}

longestsequence("dghhhmhmx");
