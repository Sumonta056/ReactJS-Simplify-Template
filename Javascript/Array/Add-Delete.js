
const month = ['January','February','March','April','May','June','July','August','September'];

// Add a new element to the end of the array
console.log(month.push('October'));
console.log(month);
/*
[
  'January',   'February',
  'March',     'April',
  'May',       'June',
  'July',      'August',
  'September', 'October'
]
*/

// Add a new element to the start of the array
console.log(month.unshift('October'));
console.log(month);
/*
[
  'October',  'January',
  'February', 'March',
  'April',    'May',
  'June',     'July',
  'August',   'September',
  'October'
]
*/

// Delete element to the end of the array
console.log(month.pop());
console.log(month);
/*
[
  'October',  'January',
  'February', 'March',
  'April',    'May',
  'June',     'July',
  'August',   'September'
]
*/

// Delete element to the end of the array
console.log(month.shift());
console.log(month);
/*
[
  'January',   'February',
  'March',     'April',
  'May',       'June',
  'July',      'August',
  'September'
]
*/

const vvNumber = [31,30,29,33,32];

// Sort Number Ascending
console.log(vvNumber.sort());
/*
[ 29, 30, 31, 32, 33 ]
*/

// Sort Character
console.log(month.sort());
/*
[
  'April',     'August',
  'February',  'January',
  'July',      'June',
  'March',     'May',
  'September'
]
*/



