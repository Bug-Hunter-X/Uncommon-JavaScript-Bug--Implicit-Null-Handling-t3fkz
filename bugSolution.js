function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  }

  // ... rest of the function, now safe to proceed
  return a + b; // Example operation
}