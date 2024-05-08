// for in
let myBike = {
  bike: "Ducati",
  info: {
    color: "Red",
    engineVolume: 996,
  },
  isPopular: false,
};

for (let key in myBike) {
  console.log(key); //ключи
  console.log(myBike[key]);
}

//
console.log(" ");
//

for (let key in myBike.info) {
  console.log(key);
  console.log(myBike.info[key]);
}
