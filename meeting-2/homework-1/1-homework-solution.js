'use strict';


function Car(make, model, year){
	this.make = make,
    this.model = model,
    this.year = year,
    this.getCarInfo = () => `${this.make} ${this.model} released in ${this.year}`,
    this.owners = [],
    this.addOwner = owner => this.owners.push(owner),
    this.removeOwner = owner => this.owners = this.owners.filter(item => item !== owner),
    this.getOwnersCount = () => this.owners.length,
    this.getOwnerNames = () => this.owners.map(item => item.fullName()),
    this.getFullInfo = () => `${this.getCarInfo()}. ${this.owners.length} person owns this car. These are - ${this.getOwnerNames()}`
}

function Person(name, surname, age, gender, cars = []){
	this.name = name,
    this.surname = surname,
    this.age = age,
    this.gender = gender,
    this.cars = cars,
    this.fullName = () => `${this.name} ${this.surname}`
    this.countCars = () => this.cars.length,
    this.buysCar = car => {
        this.cars.push(car);
        car.owners.push(this)
    },
    this.sellsCar = car => {
        this.cars = this.cars.filter(item => item !== car);
        car.owners = car.owners.filter(item => item.name !== this.name)
    }
    this.getAllCarsInfo = () => `${this.name} owns These cars : ${this.cars.map(item => item.getCarInfo() ) }`
}




let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");
let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti); 
daniel916.buysCar(stodevianosto);

daniel916.sellsCar(duti_picoti); 


ilona.buysCar(stodevianosto);
ilona.buysCar(duti_picoti); 

console.log(daniel916.getAllCarsInfo());

console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fullName: ilona.fullName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(),
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(),
    getFullInfo: duti_picoti.getFullInfo(),
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});