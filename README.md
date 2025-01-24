# Uncommon JavaScript Bug: Implicit Null Handling

This repository demonstrates a common, yet subtle, bug in JavaScript related to implicit null handling.  Many functions assume input values are defined when they may not be, leading to unexpected results or program crashes.  This example shows how this can occur and how to fix it.

## The Bug

The `bug.js` file contains a function that does not explicitly handle null values. If either 'a' or 'b' is null, the function may throw an error or return an unexpected value. 

## The Solution

The `bugSolution.js` file provides a corrected version.  The solution explicitly checks for null values at the start of the function, handling them gracefully (in this case, by returning null).  This prevents unexpected behavior and makes the function more robust.

This is a simple example, but the principle of explicitly checking for null or undefined values applies across various programming contexts in JavaScript to avoid runtime errors.