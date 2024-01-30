const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "January",
];

// Return index of First Occurrence of Element
console.log("First Index = " + month.indexOf("January"));
// Output : First Index = 0

// Return index of Last Occurrence of Element
console.log("Last Index = " + month.lastIndexOf("January"));
// Output : Last Index = 9

// If no element found Return -1
console.log("Nothing Found  = " + month.lastIndexOf("November"));
// Output : Nothing Found = -1

// Check if element exists in arrary (if not return false)
console.log("Element Found = " + month.includes("November"));
// Output : Element Found = false

// Check if element exists in arrary (if yes return true)
console.log("Element Found = " + month.includes("April"));
// Output : Element Found = true

// Find Element :
// If element exists in arrary returns the first element that stasifty matches
console.log(month.find((value) => value == "April")); // Return Element
// Output : April
console.log(month.findIndex((value) => value == "April")); // Return Index
// Output : 3

// If element not exists in arrary returns "undefined"
console.log(month.find((value) => value == "Apri"));
// Output : undefined

// Filter Elements :
const age = [1, 2, 3, 4, 5];
console.log(age.filter((value) => value <= 3));
// Output : [ 1, 2, 3 ]