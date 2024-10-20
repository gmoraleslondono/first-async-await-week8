const myPromise = new Promise((resolve, reject) => {
  // logic
  let success = true;
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed!");
  }
});

const result = async () => {
  try {
    const value = await myPromise;
    console.log("Success:", value);
  } catch (error) {
    console.log("Error:", error);
  }
};

result();
