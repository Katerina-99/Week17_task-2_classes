const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>",
  },
];

//Создаем класс Transport
class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
    // this.doors = null;
    // this.maxSpeed = null;
  }

  getInfo() {
    return {
      type: this.type,
      price: this.price,
      brand: this.brand,
      //   doors: this.doors,
      //   maxSpeed: this.maxSpeed,
    };
  }

  getPrice() {
    return this.price;
  }
}

//Создаем класс Car, который наследуется от класса Transport
class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }

  getDoorsCount() {
    return this.doors;
  }
}

//Создаем класс Bike, который наследуется от класса Transport
class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return this.maxSpeed;
  }
}

const transport = new Transport(data[0].type, data[0].price, data[0].brand);
console.log(transport.getInfo());

const car = new Car(data[1].type, data[1].price, data[1].brand, data[1].doors);
console.log(car.getInfo());
console.log(car.getDoorsCount());

const bike = new Bike(
  data[2].type,
  data[2].price,
  data[2].brand,
  data[2].maxSpeed
);
console.log(bike.getInfo());
console.log(bike.getMaxSpeed());
