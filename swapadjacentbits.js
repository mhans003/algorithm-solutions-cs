/*
You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair. Then return the result as a decimal number.
*/

function swapAdjacentBits(n) {
    //Check edge cases
    return n === 0 ?
    0 :
    n === 1 ? 
    2 :
    //If this number in binary form has an odd number of digits, add a 0 in front to make pairs.
    n.toString(2).length % 2 === 1 ?
    Number(
      ("0" + n.toString(2))
      //Split into individual arrays.
      .split("")
      //Swap the pairs
      .map((thisBit, index, array) => {
          if(index % 2 === 0 && index < array.length) {
              return [array[index], array[index + 1]] = [array[index + 1], array[index]];
          }
      })
      //Get rid of null values
      .filter(thisElement => {
          if(Array.isArray(thisElement)) {
              let digits = "";
              thisElement.forEach(digit => {
                  digits += digit;
              });
              return digits;
          } 
      })
      //Put the pairs back together
      .map(pair => {
          let thisPair = "";
          pair.forEach(digit => {
              thisPair += digit;
          });
          return thisPair;
      })
      //Make into a new array that is reversed and each element a single digit
      .join("")
      .split("")
      .reverse()
      //Add up each power of two value to get output after swap.
      .reduce((currentTotal, currentDigit, index, array) => {
          currentTotal = parseInt(currentTotal);
          let currentValue = Number(currentDigit);
          return currentValue === 1 ? parseInt(currentTotal += (2 ** (index))) : parseInt(currentTotal);
      })
    )
    //If the binary form has an even number of digits, do the same but without the extra 0
      :
    Number(
      n.toString(2)
      .split("")
      .map((thisBit, index, array) => {
          if(index % 2 === 0 && index < array.length) {
              return [array[index], array[index + 1]] = [array[index + 1], array[index]];
          }
      })
      .filter(thisElement => {
          if(Array.isArray(thisElement)) {
              let digits = "";
              thisElement.forEach(digit => {
                  digits += digit;
              });
              return digits;
          } 
      })
      .map(pair => {
          let thisPair = "";
          pair.forEach(digit => {
              thisPair += digit;
          });
          return thisPair;
      })
      .join("")
      .split("")
      .reverse()
      .reduce((currentTotal, currentDigit, index, array) => {
          currentTotal = parseInt(currentTotal);
          console.log(currentTotal);
          let currentValue = Number(currentDigit);
          //console.log(array[index - 1]);
          return currentValue === 1 ? parseInt(currentTotal += (2 ** (index))) : parseInt(currentTotal);
      })
    );
}
  