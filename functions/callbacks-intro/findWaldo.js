// EX-1 CALLBACK ARGUMENT 
// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     // let name = names[i];
//     if (names[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// const actionWhenFound = function(i) {
//   console.log("Found Waldo at index " + i + "!" );
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// EX_2 ARRAY forEach

const findWaldo = (names, found) => {
  // for (let i = 0; i < names.length; i++) {
    names.forEach(function(item, index) {
          // let name = names[i];
    if (item === "Waldo") {
      found(index);   // execute callback
    }
  });
};

const actionWhenFound = function(i) {
  console.log("Found Waldo at index " + i + "!" );
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
