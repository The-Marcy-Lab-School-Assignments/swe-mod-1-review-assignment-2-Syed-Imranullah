# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Read the following code:

```js
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = playlist1;
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

Part A: What will be logged to the console? Why?

Part B: How would you modify the code so that reassigning `playlist2.songCount` does NOT affect `playlist1`.songCount? Write the corrected code below your response (we've provided the broken code again for you to fix).

### Response 1

Part A: The output will be `15`. In JavaScript, objects are assigned and passed by reference rather than by value. The statement `const playlist2 = playlist1;` does not create a new object; instead, it assigns `playlist2` a reference to the same memory location as `playlist1`. Constantly, modifying `playlist2.songCount` mutates the shared object, causing `playlist1.songCount` to reflect the updated value when it is logged to the console.

Part B: To prevent changes to playlist2 from affecting playlist1, a copy of the object must be created. Corrected code: 



The spread operator (...) creates a new object by copying iterable properties from `playlist1`. This breaks the shared reference, making sure that mutations to `playlist2` do not affect `playlist1`.

**Corrected Code:**

```javaScript
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = { ...playlist1 };

playlist2.songCount = 15;
console.log(playlist1.songCount);
```

---

## Prompt 2

```js
const students = [
  { name: "Maya", grade: 92, passed: true },
  { name: "Jamal", grade: 78, passed: true },
  { name: "Destiny", grade: 88, passed: true },
  { name: "Marcus", grade: 95, passed: true }
];
```

For each task below, identify which array method (forEach, filter, map, find, or reduce) you would use.

1. You need to get an array containing only students who scored above 85.
2. You need to find the student named "Destiny" and update their grade to 90.
3. You need to calculate the average grade of all students.
4. You need to create an array of strings in the format: "Maya: 92"

### Response 2

1. `filter` should be used because it returns a new array containing only the elements that meet a specific condition. In this case, it would return only the students whose grades are above 85.

2. `find` should be used because it returns the first element that matches a given condition. This allows you to locate the student named “Destiny” and update her grade.

3. `reduce` should be used because it can accumulate values into a single result. Here, it can be used to sum all student grades and then calculate the average.

4. `map` should be used because it transforms each element in the array. In this case, it can create a new array of formatted strings like `"Maya: 92"`.

---

## Prompt 3

We should expect that the code below prints the array `[ 'A', 'B', 'C', 'D' ]` but an error is thrown when the third line of code is executed.

Explain why this error occurs, how to fix it, and provide a suggestion for how to avoid this error in the future.

```js
const letters = ['a', 'b', 'c', 'd'];
const capitalize = (str) => str.toUpperCase();

const upperCaseLetters = letters.map(capitalize());
// Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')

console.log(upperCaseLetters);
```

### Response 3

The error occurs because the `capitalize` function is being invoked immediately instead of being passed as a callback to the `map` method. When `capitalize()` is called with no arguments, the parameter `str` is `undefined`, which causes the call to `str.toUpperCase()` to throw a TypeError.

To fix this issue, the function reference should be passed directly to `map` without invoking it, allowing `map` to supply each array element as an argument to the function.

corrected code: 

```js
const upperCaseLetters = letters.map(capitalize);
```


---

## Prompt 4

Given this code:

```js
const orders = [
  { id: 1, total: 45 },
  { id: 2, total: 23 },
  { id: 3, total: 67 }
];

const grandTotal = orders.reduce((sum, order) => {
  return sum + order.total;
}, 0);
```

- Part A: What will `grandTotal` equal after this code runs?
- Part B: Explain what the `0` at the end of the reduce method does. Why is it important?
- Part C: Walk through what happens in the FIRST iteration of reduce:
    - What is the value of sum?
    - What is the value of order?
    - What gets returned?

### Response 4

Part A: After the code runs, `grandTotal` will equal `135`.

Part B: The `0` at the end of `reduce` is the starting value for the accumulator `(sum)`. It tells reduce where to begin adding up the totals. Having this initial value is important because it makes sure the accumulator starts with something known, avoids errors if the array is empty, and keeps the data type consistent while going through the array.

Part C: Value of `sum`: `0`
This is the initial value supplied to `reduce`.

Value of `order`: `{ id: 1, total: 45 }`
This is the first element in the orders array.

Returned value: `45`
The callback returns `sum + order.total`, which is `0 + 45`. This returned value becomes the accumulator for the next iteration.