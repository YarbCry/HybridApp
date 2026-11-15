const loadData = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 500);
  });

loadData()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
