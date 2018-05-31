"use strict"

console.log("Задача 1")
class BarcodeGenerator {
    constructor(size) {
        this.size = size;
    }
    create() {
        let id = [];
        for (let i = 0; i < this.size; ++i) {
            id.push(Math.floor(Math.random() * (10 - 0)) + 0)
        }
        let prefix = this[BarcodeGenerator.prefix];
        if (typeof prefix === 'undefined') {
            return `${id.join('')}`
        } else {
            return `${prefix}-${id.join('')}`
        }
    }
}
const generator = new BarcodeGenerator(4);
generator[BarcodeGenerator.prefix] = 'AA';
console.log(generator.create());

generator[BarcodeGenerator.prefix] = 'XX';
console.log(generator.create());
console.log(generator.create());
console.log(generator.create());

delete generator[BarcodeGenerator.prefix];
console.log(generator.create());

console.log('Задача 2')
class HexRange {
  constructor(from, to) {
      this.from = from;
      this.to = to;
    }
    [Symbol.iterator]() {
      let a = this.from;
      let b = this.to;
      return {
        next() {
          if (a <= b) {
            let aHex = a.toString(16);
            a++;
            return {
              done: false,
              value: aHex
            };
          } else {
            return {
              done: true
            };
          }
        }
      };
    }
}


let queue = new HexRange(247, 253);
console.log(...queue);


console.log("Задача 3")
class DateRange {
  constructor(from, to) {
      this.from = from;
      this.to = to;
    }
    [Symbol.iterator]() {
      let start = this.from,
        end = this.to;
      return {
        next() {
          if (start <= end) {
            if (start.getDay() === 0) {
              return new Date(start.setDate(start.getDate() + 1));
            } else if (start.getDay() === 6) {
              return new Date(start.setDate(start.getDate() + 2));
            } else {
              let dateValue = new Date(start);
              if (start.getDay() === 5) {
                new Date(start.setDate(start.getDate() + 3));
                return {
                  done: false,
                  value: dateValue
                };
              } else {
                new Date(start.setDate(start.getDate() + 1));
                return {
                  done: false,
                  value: dateValue
                };
              }
            }
          } else {
            return {
              done: true
            };
          }
        }
      }
    }



}





const from = new Date(2017, 2, 13, 23, 59);
const to = new Date(2017, 2, 28, 0, 1);
let range = new DateRange(from, to);

for (let day of range) {
  console.log(day.toLocaleDateString('ru-Ru'));
}