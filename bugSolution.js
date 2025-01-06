function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers.');
  }
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Inputs cannot be NaN');
  }
  return a + b;
}

console.log(foo(2, 5)); // Output: 7
console.log(foo(null,5)); // Throws Error
console.log(foo(2,NaN)); // Throws Error
console.log(foo('a',5)); // Throws Error