// МЕТОДЫ ОБЪЕКТОВ
let myBike = {
  bike: "Ducati",
  info: {
    color: "Red",
    engineVolume: 996,
  },
  isPopular: false,
  showInfo: () =>
    console.log(
      `У меня есть мотоцикл ${myBike.bike} у него двигатель ${myBike.info.engineVolume}`
    ),
  //можно еще по другому записать эту функцию (так более правильно)
  showInfoTwo() {
    console.log(
      `У меня есть мотоцикл ${this.bike} у него двигатель ${this.info.engineVolume}`
    );
  },
};

myBike.showInfo();
myBike.showInfoTwo();
