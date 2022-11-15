// fetch("https://imdb-api.com/en/API/Top250Movies/k_x8sw0uy4")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     const list = data.d;
//     list.map((items) => {
//       console.log(items);
//     });
//   })

//   .catch((err) => {
//     console.log(err);
//   });

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://imdb-api.com/en/API/Top250Movies/k_x8sw0uy4", requestOptions)
  .then((response) => response.json())
  .then((data) => {
    items = data.items;
    console.log(items);
    // items.forEach(addFuction)
  })
  .catch((error) => console.log("error", error));

// function addFuction
