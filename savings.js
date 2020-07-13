function balance(opening, interest, taxFree, taxRate, numMonths) {
  let n = 1;
  //calculate for each month
  while (n <= numMonths) {
    let tax = "";
    const interestTotal = opening * (interest / 100);

    //calculate tax if above taxLimit
    if (opening > taxFree) {
      const taxable = opening - taxFree;
      tax = taxable * (taxRate / 100);
    } else {
      tax = 0;
    }

    //update opening balance
    opening += interestTotal - tax;
    //calculate next month
    n++;
  }
  return opening;
}

// balance(10000, 1, 20000, 1, 2)
// balance(25000, 2, 20000, 1, 2)
// balance(19800, 2, 20000, 1, 2);
