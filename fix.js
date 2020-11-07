var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: ...
}

console.log(x);
// expected output: It looks like it broke.
