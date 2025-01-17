function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let roman = '';
	const specialCases = {
    900: 'CM',
    400: 'CD',
    90: 'XC',
    40: 'XL',
    9: 'IX',
    4: 'IV',
  };
	 for (const [value, symbol] of Object.entries(specialCases)) {
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }
  for (let i = 0; i < Object.keys(obj).length; i++) {
    const [symbol, value] = obj[i];
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }

  return roman;



}
// You can test your code by running the above 
//function and printing it to console by pressing 
//the run button at the top. To run it with input 36,
//uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
