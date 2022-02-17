// Import head and assertEqual functions
const head = require(`../head`);
const assertEqual = require(`../assertEqual`);

//TEST CODE
assertEqual(head([1,2,3]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6,7,8]), 7); // This assertion should fail
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs"); // This assertion should fail
assertEqual(head([1]),1);
assertEqual(head([]), undefined);