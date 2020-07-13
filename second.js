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

  // compare prop value to value before
  //   for (let num in frequency){
  //     if(frequency[num] > ]){
  //       return frequency[num]
  //     } else {
  // }
  //   }

  return frequency;
}

secondLowest([4, 3, 1, 1, 2]);
