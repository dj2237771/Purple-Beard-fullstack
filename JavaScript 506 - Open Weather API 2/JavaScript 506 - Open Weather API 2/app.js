/////////////////// Open Weather API II //////////////////////////
let search = (e) => {
  const keyAPI = `8826c10064648be786a4fc5a7a965748`;
  const loc = document.getElementById("locInput").value;
  const stringPassIn = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}`;

  fetch(stringPassIn)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const temperature = Math.trunc(data.main.temp) - 273;
      const description = data.weather[0].description;
      document.getElementById(
        "results"
      ).innerHTML = `<p>temperature <b>${temperature} °C</b><br>${description}</p>`;
    })
    .catch((err) => console.log(err));

  e.preventDefault();
};

document.getElementById("myBTN").addEventListener("click", search);
