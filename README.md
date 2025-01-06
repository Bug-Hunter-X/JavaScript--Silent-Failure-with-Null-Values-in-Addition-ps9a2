# JavaScript: Silent Failure with Null Values in Addition

This repository demonstrates a common but subtle JavaScript error involving null values and addition.

## The Problem

The provided JavaScript function `foo` adds two numbers.  It explicitly checks for `null` values and returns `0` if either input is `null`. This approach, while seemingly robust, can mask errors. If the inputs are not numbers or are `undefined`,  the addition might still fail silently or give unexpected results (e.g., `NaN`).

## Solution

The solution provides stricter input validation to catch these issues, throwing errors for unexpected input types.  This makes the error handling more explicit and aids debugging.

## How to run

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run each file to observe the different behaviors.
