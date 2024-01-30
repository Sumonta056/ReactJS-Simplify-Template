const girls = ["Promi","Suma","Sima"];
const boys = ["Mridul", "Sumonta"];

// Merge two arrays into a single
const add = girls.concat(boys);
console.log(add);
// [ 'Promi', 'Suma', 'Sima', 'Mridul, Sumonta' ]

// convert array into string representation
console.log(add.toString());
// Promi,Suma,Sima,Mridul,Sumonta

// join all elements together in string but with a separator
console.log(add.join(' - '));
// Promi - Suma - Sima - Mridul - Sumonta