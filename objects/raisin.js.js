const raisinAlarm = function (cookie) {
  let results = [];
  for (let item in cookie) {
    if (cookie.includes("🍇")) {
      results = "Raisin alert!"
    } else { 
      results = "All good!"
    }   
  };
  return results
};

// TEST CODE
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));



// Stretch Test Code

const raisinAlarmArray = function (cookie) {
  let results = [];
  for (let item in cookie) {
    if (cookie[item].includes("🍇")) {
      results.push("Raisin alert!")
    } else { 
      results.push("All good!")
    }   
  };
  return results
};



// console.log(
//   raisinAlarmArray([
//     ["🍫", "🍫", "🍇", "🍫"],
//     ["🍫", "🍇", "🍫", "🍫", "🍇"],
//     ["🍫", "🍫", "🍫"],
//   ])
// );