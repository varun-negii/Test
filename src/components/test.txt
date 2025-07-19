### Q1. What are the different data types in JavaScript?

There are two types:

1. **Primitive Types** –
   Examples: `Boolean`, `BigInt`, `String`, `Number`, `Null`, `Undefined`, `Symbol`

2. **Non-Primitive Types** –
   Examples: `Object`, `Array`, `Function`

---

### Q2. What is Hoisting in JavaScript?

Hoisting means moving **declarations** (like `var`, `function`) to the **top of their scope** before code runs.

---

### Q3. Difference between `var`, `let`, and `const`?

* `var`: Function-scoped, can be changed, available before declaration due to hoisting (ES5).
* `let`: Block-scoped, can be changed (ES6).
* `const`: Block-scoped, **cannot be changed** once assigned (ES6).

---

### Q4. What is a Closure?

A closure is a function that **remembers variables from its outer function**, even after the outer function ends.

---

### Q5. Difference between `==` and `===`?

* `==`: Compares **value only** (type conversion).
* `===`: Compares **value and type** (strict comparison).

Example:

```js
'5' == 5   // true
'5' === 5  // false
```

---

### Q6. What are Truthy and Falsy values?

* **Truthy**: Values that act like `true`.
  Examples: `"abc"`, `1`, `[]`, `{}`
* **Falsy**: Values that act like `false`.
  Examples: `0`, `""`, `null`, `undefined`, `NaN`, `false`

---

### Q7. Difference between `null` and `undefined`?

* `null`: Intentionally set to “nothing”
* `undefined`: A variable has been declared but not assigned

---

### Q8. What is Event Delegation?

Event delegation is when a **parent element** handles events for its **child elements** using a single event listener.

---

### Q9. What does the `this` keyword do?

`this` refers to the **current object** or context where the code is running.

---

### Q10. What is an Arrow Function? Difference from regular function?

Arrow functions are a **shorter syntax** and **do not have their own `this`**.

Example:

```js
const add = (a, b) => a + b;
```

---

### Q11. Synchronous vs Asynchronous in JavaScript?

* **Synchronous**: Code runs step-by-step (blocking).
* **Asynchronous**: Code can **pause and resume** later (non-blocking), like with API calls.

---

### Q12. What is the Event Loop?

The event loop allows JavaScript to **handle async tasks** by checking the **call stack** and **callback queue**.

---

### Q13. What are Promises?

Promises handle **asynchronous operations**.

States:

* `pending`
* `resolved`
* `rejected`

Example:

```js
fetch(url)
  .then(data => ...)
  .catch(error => ...)
```

---

### Q14. What is a Callback Function?

A function that is **passed into another function** to run later.

---

### Q15. Difference between `map`, `filter`, and `forEach`?

* `map`: Transforms each item and **returns a new array**
* `filter`: Returns a new array with **items that match a condition**
* `forEach`: Runs code for each item, **no return**

---

### Q16. Difference between `setTimeout` and `setInterval`?

* `setTimeout`: Runs code once after a delay
* `setInterval`: Repeats code every few milliseconds

---

### Q17. What is LocalStorage?

LocalStorage is a browser feature to **store key-value data** that stays until manually removed.

---

### Q18. What is `async/await`?

`async/await` lets us **write async code like sync code** using Promises.

Example:

```js
async function fetchData() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
}
```

---

### Q19. What is a Higher Order Function?

A function that **takes another function** as input or **returns a function**.

---

### Q20. What are `call`, `apply`, and `bind` methods?

They are used to **control the value of `this`** in functions.

#### `call()`

Calls a function with a given `this` value and arguments one by one.

```js
function greet() {
  console.log(this.name);
}
const person = { name: "Sparsh" };
greet.call(person); // Output: Sparsh
```

#### `apply()`

Same as `call()` but takes arguments as an **array**.

```js
function greet(msg) {
  console.log(msg + " " + this.name);
}
greet.apply(person, ["Hello"]); // Output: Hello Sparsh
```

#### `bind()`

Returns a **new function** with `this` bound to the given object.

```js
const greetPerson = greet.bind(person, "Hi");
greetPerson(); // Output: Hi Sparsh
```

---
