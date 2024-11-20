const names = [
  { name: "Sumit", selling: 234 },
  { name: "Sumit", selling: 234 },
  { name: "Sumit", selling: 234 },
  { name: "Sumit", selling: 234 },
  { name: "Sumit", selling: 234 },
  { name: "Sumit", selling: 234 },
];

function sum(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) sum += a[i].selling;
  return sum;
}


