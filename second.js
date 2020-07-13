function secondLowest(array) {
  if (array.length === 0) {
    return null;
  }

  let frequency = {};
  for (let i = 0; i < array.length; i++) {
    //if key exists in object then +1
    if (frequency[array[i]]) {
      frequency[array[i]]++;
    } else {
      //create key = 1 in frequency object
      frequency[array[i]] = 1;
    }
  }

  // sort keys from highest to lowest
  const sorted = Object.keys(frequency).sort((a, b) => {
    return frequency[b] - frequency[a];
  });

  //return second entry
  return sorted[1];
}

secondLowest([4, 3, 1, 1, 2]);
