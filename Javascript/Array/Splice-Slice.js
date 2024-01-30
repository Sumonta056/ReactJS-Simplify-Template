const month = ['January','March','April','May','June','August','September'];

// Add February to Index 1
console.log(month.splice(1,0,'February'));
console.log(month);
/*
[
  'January', 'February',
  'March',   'April',
  'May',     'June',
  'August',  'September'
]
*/

// Add July before August
var indexOfAugust = month.indexOf('August');
console.log(indexOfAugust);

month.splice(indexOfAugust, 0, "July");
console.log(month);
/*
6
[
  'January',   'February',
  'March',     'April',
  'May',       'June',
  'July',      'August',
  'September'
]
*/


const number = [1,2,6,5];

// update the value 6,5 with 3,4
console.log(number.splice(2,3,3,4));
console.log(number);
/*
[ 6, 5 ]
[ 1, 2, 3, 4 ]
*/