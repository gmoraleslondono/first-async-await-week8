const myPromise = new Promise((resolve, reject) => {
  // logic
  let success = false;
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed!");
  }
});

myPromise
  .then((message) => {
    console.log("Success:", message);
    // logic
  })
  .catch((error) => {
    console.log("Error:", error);
    // logic
  });
