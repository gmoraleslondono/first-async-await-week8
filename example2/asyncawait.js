const fetchAdviceById = async (id) => {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    const advice = data.slip.advice;
    console.log("Advice: " + advice);
  } catch (error) {
    console.error("Error fetching advice", error);
  }
};

fetchAdviceById(42);
