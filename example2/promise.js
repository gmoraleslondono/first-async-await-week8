const fetchAdviceById = (id) => {
  fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return response.json();
    })
    .then((data) => {
      const advice = data.slip.advice;
      console.log("Advice:", advice);
    })
    .catch((error) => console.error("Error fetching advice", error));
};

fetchAdviceById(42);
