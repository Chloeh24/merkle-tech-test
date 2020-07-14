function longestsequence(seq) {
  //highest value

  let letterCount = {};
  let count = 1;
  let biggest = {};
  //loop through each letter
  for (let i = 1; i < seq.length; i++) {
    //if letter doesn't exist then create entry
    if (!letterCount[seq[i]]) letterCount[seq[i]] = 1;
    //if letter is the same as before then increase count
    else if (seq[i] === seq[i - 1]) {
      letterCount[seq[i]]++;
      //if letterCount is bigger than count, set it to be biggest num
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
