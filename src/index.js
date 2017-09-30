var arr = [],
result,
counterOfTwos,
counterOfFives,
arrayFromExpression = [],
numberContent = [],
number,
twosAndFives = {
    numberOfTwos: 0,
    numberOfFives: 0
};

function zerosInFactoreal (n,type) {
  counterOfTwos = 0;
  counterOfFives = 0;
  outer: while (n > 0) {
      if (n % 5 == 0 || n % 2 == 0) {
          result = n;
          for (var j = 1;; j++) {
              if( result % 5 == 0) {
                  result = result / 5;
                  counterOfFives++;
              };
              if( result % 2 == 0) {
                  result = result / 2;
                  counterOfTwos++;
              };
              if( result % 2 != 0 && result % 5 != 0 ) {
                  break;
              };
          };
      };
      type == 'double' ? n = n - 2 : n--;
  };
  twosAndFives.numberOfTwos += counterOfTwos;
  twosAndFives.numberOfFives += counterOfFives;
  return twosAndFives; 
};

module.exports = function zeros(expression) {
  arrayFromExpression = expression.split('*');
  twosAndFives.numberOfTwos = 0;
  twosAndFives.numberOfFives = 0;
  for (var i = 0; i < arrayFromExpression.length; i++) {
    numberContent = arrayFromExpression[i].split('!');
    number = +numberContent[0];
    numberContent.length == 2 ? zerosInFactoreal (number) : zerosInFactoreal (number, 'double');
  };
  return Math.min( twosAndFives.numberOfTwos , twosAndFives.numberOfFives );
};
