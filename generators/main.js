'use strict'

function hslToRgb(h, s, l) {
    let r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = function (p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    function colorToHex(color) {
        let hex = Math.round(color * 255).toString(16);
        return hex.length < 2 ? `0${hex}` : hex;
    }

    const color = [r, g, b].map(colorToHex).join('');
    return `#${color}`;
}

class Order {
    constructor(id, weight) {
        this.id = id;
        this.weight = weight;
    }
}

class Truck extends Array {
    constructor(number, weightLimit) {
        super();
        this.number = number;
        this.weightLimit = weightLimit;
    }

    add(order) {
        if (!this.isFit(order)) {
            return false;
        }
        this.push(order);
        return true;
    }

    isFit(order) {
        return this.weightLimit >= (this.totalWeight + order.weight);
    }

    get totalWeight() {
        return this.reduce((total, order) => total + order.weight, 0);
    }

    show() {
        console.log(`Машина №${this.number} (общий вес груза ${this.totalWeight}кг):`);
        this.forEach(order => console.log(`\tЗаказ #${order.id} ${order.weight}кг`));
    }
}



console.log("Задача 1: Палитра для сайта")

function* palette(amount) {
    let hue = Math.random(),
        saturation = Math.random(),
        lightness = Math.random(),
        step = 360 / amount;
    for (let i = 0; i < amount; i++) {
        let hsl = hslToRgb(hue, saturation, lightness);
        hue = hue + (step / 360)
        if (hue > 1) {
            hue = hue - 1
        }
        yield hsl;
    }
}
for (const color of palette(10)) {
    console.log(color);
}

console.log("Задача 2: Конкурс «Угадай скидку»")

function* numberQuiz(number) {
    let result = yield `Назовите число:`;
    while (true) {
        if (result === number) {
            return `Вы угадали, это ${number}`
        } else if (result < number) {
            result = yield `Больше чем ${result}`
        } else if (result > number) {
            result = yield `Меньше чем ${result}`
        }
    }
}

const attempts = [7, 4, 6, 5];
const quiz = numberQuiz(5);
let attempt, result;
do {
    result = quiz.next(attempt);
    console.log(result.value);
    attempt = attempts.shift();
} while (!result.done);

console.log('Задача № 3. Планировщик машин')

class TruckPlanner extends Array {
    constructor(weightLimit) {
        super()
        this.weightLimit = weightLimit;
        this.orders = [];
    }
    add(order) {
        this.push(order)
    }
}
TruckPlanner.prototype[Symbol.iterator] = function* () {
    const truckPlannerCopy = this.slice();
    let number = 1;
    let truck = new Truck(number, this.weightLimit);
    do {
        let result = truckPlannerCopy.shift();
        if (!(truck.add(result))) {
            yield truck
            number++
            truck = new Truck(number, this.weightLimit);
            truck.add(result);
        }


    }
    while (truckPlannerCopy.length) {
        yield truck
    }
}

const planner = new TruckPlanner(10);
planner.add(new Order(1, 2));
planner.add(new Order(2, 5));
planner.add(new Order(3, 4));
planner.add(new Order(4, 4));
planner.add(new Order(5, 1));
planner.add(new Order(6, 2));

for (const truck of planner) {
    truck.show();
}