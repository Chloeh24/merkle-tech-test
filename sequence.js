function longestsequence(seq) {
  //highest value

  let letterCount = {};
  let count = 1;
  let biggest = {};
  //loop through each letter
  for (let i = 1; i < seq.length; i++) {
    //if letter is the same as before then increase count
    if (!letterCount[seq[i]]) letterCount[seq[i]] = 1;
    else if (seq[i] === seq[i - 1]) {
      letterCount[seq[i]]++;
      if (letterCount[seq[i]] > count) {
        biggest[seq[i]] = letterCount[seq[i]];
        count++
      }
    }
  }

  return biggest;
}

// longestsequence("dghhhmhmx");
longestsequence("dhkkhhKKKt");
