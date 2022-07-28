const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const pass = grades.filter(function(grades) {
  return grades > 70;
});

console.log("The passing grades over 70 are", pass);

