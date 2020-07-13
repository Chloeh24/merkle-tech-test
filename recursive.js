function reverseString(str) {
  //return empty or 1 character string
  if (str.length <= 1) {
    return str;
  } else {
    //call the str - 1st letter each time to build word backwards
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

reverseString("abcb");
