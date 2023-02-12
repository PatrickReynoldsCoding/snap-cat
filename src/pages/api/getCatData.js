// Function to get both cat fact and image data
export const getCatData = async () => {
  // Use Promise.all to wait for both requests to complete
  return Promise.all([
    // Request to get cat fact
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => data),
    // Request to get cat image
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => data),
  ]);
};
