"use strict";
class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years ald and has ${this.followers} followers`
    );
  }
}

const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers

// User Poly is 3 years old and has 17 followers

// Напиши класс User для создания пользователя со следующим свойствами:
// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку:
// User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

// function User ({name, age, followers}) {
//   this.name = name;
//   this.age = age;
//   this.followers = followers
// }

// User.prototype.getInfo = function () {
//   console.log(`User ${this.name} is ${this.age} years ald and has ${this.followers} followers`)
// }


// const mango = {
//   name: 'Mango',
//   sales: 5,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7
// console.log(mango.sell('car')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = {
//   name: 'Poly',
//   sales: 10,
//   sell(product) {
//     this.sales += 5;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

// // constructor

// const Manager = function(name = 'manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };

// const mangos= new Manager('Mango', 5);
// console.log(mangos.sales); // 5
// console.log(mangos.sell('TV')); // Manager Mango sold TV
// console.log(mangos.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mangos.sales); // 7

// const polys = new Manager('Poly', 10);
// console.log(polys.sales); // 10
// console.log(polys.sell('TV')); // Manager Poly sold TV
// console.log(polys.sell('Microwave')); // Manager Poly sold Microwave
// console.log(polys.sales); // 12

// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };

// const mango = new Guest('Mango', 28);

// console.log(mango);

// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// /*
//  * Теперь у нас есть конструктор базового класса героя,
//  * добавим в prototype какой-то метод.
//  */
// Hero.prototype.gainXp = function(amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const mango = new Hero('Mango', 1000);
// console.log(mango);  

// // Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
// mango.gainXp(500); 
// console.log(mango); 