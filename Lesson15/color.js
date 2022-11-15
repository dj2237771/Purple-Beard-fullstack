// const keyApi = `a4d9d8dd3f4395cf4cf668b79f0125fa`;
// const loc = `London`;

// const apiUrl = `api.openweathermap.org/data/2.5/weather?q=${loc},uk&APPID=${keyApi}`;

const probability = new Promise((greter, less) => {
  let randomMath = Math.random();
  if (randomMath > 0.5) {
    greter("higher probability" + randomMath);
  } else {
    less("lower probability" + " " + randomMath);
  }
});
probability
  .then((message) => {
    console.log("thank you for participating" + " " + message);
  })
  .catch((message) => {
    console.log(message);
  })
  .finally(
    console.log("everything wokred at it was suposed to and the message was")
  );

// fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// )
//   .then((res) => res.json())
//   .then((data) => (prices = data.map((obj) => obj.price)))
//   .then((prices) => console.log(prices));
