'use strict'

function rand(min, max) {
    return Math.ceil((max - min + 1) * Math.random()) + min - 1;
}

function generateId() {
    return Array(4).fill(1).map(value => rand(1000, 9999)).join('-');
}

const pointsInfo = [{
        title: 'Темная сторона Луны',
        coords: [500, 200, 97]
    },
    {
        title: 'Седьмое кольцо Юпитера',
        coords: [934, -491, 712]
    },
    {
        title: 'Саратов',
        coords: [30, 91, 77]
    }
];

//Задача 1

function OrdersTeleportationPoint(title, x, y, z) {
    this.title = title;
    this.x = x;
    this.y = y;
    this.z = z;
}
OrdersTeleportationPoint.prototype.getDistance = function (x, y, z) {
    return Math.sqrt(Math.pow((this.x - x), 2) + Math.pow((this.y - y), 2) + Math.pow((this.z - z), 2))
}

const point = new OrdersTeleportationPoint('Темная сторона Луны', 500, 200, 97);
let distance = point.getDistance(100, -100, 33);
console.log(`Расстояние до пункта «${point.title}» составит ${distance.toFixed(0)} единиц`);




//Задача 2

function OrdersTeleportationPointLocator(points) {
    if (!(Array.isArray(points))) {
        try {
            throw `${points} - не является массивом`;
        } catch (e) {
            console.log(e);
        }
    } else if (!(OrdersTeleportationPoint.prototype.isPrototypeOf(point))) {
        try {
            throw `${points} - не является экземпляром OrdersTeleportationPoint`;
        } catch (e) {}
    }
}
OrdersTeleportationPointLocator.prototype.getClosest = function (x, y, z) {
    const distance = [];
    points.forEach(function (calcDist) {
        let result = {};
        result.title = calcDist.title;
        result.dist = calcDist.getDistance(x, y, z).toFixed(0);
        distance.push(result);
    })
    let result = {};
    for (let i = 0; i < distance.length; i++) {
        if (!result.title) {
            result.title = distance[i].title
            result.dist = distance[i].dist

        } else if (Number(result.dist) > Number(distance[i].dist)) {
            result.title = distance[i].title
            result.dist = distance[i].dist
        }
    }
    return result;
}
const points = pointsInfo.map(point => new OrdersTeleportationPoint(point.title, ...point.coords));
const locator = new OrdersTeleportationPointLocator(points);
const closestPoint = locator.getClosest(333, 294, 77);
console.log(`Ближайший пункт телепортации заказов «${closestPoint.title}»`);


// Задача 3

class LoyaltyCard {
    constructor(name, sum) {
        this.owner = name;
        this.sum = [sum]
    };

    get id() {
        return generateId()
    }
    get balance() {
        let balance = this.sum.reduce(function (memo, el) {
            return memo + el
        }, 0)
        return balance
    }
    get discount() {
        if (this.balance < 3000) {
            return 0
        } else if (3000 <= this.balance && this.balance < 5000) {
            return 3
        } else if (5000 <= this.balance && this.balance < 10000) {
            return 5
        } else {
            return 7
        }
    }
}

LoyaltyCard.prototype.getFinalSum = function (newOrderSum) {
    return newOrderSum - (newOrderSum * this.discount * 0.01);
};
LoyaltyCard.prototype.append = function (newOrderSum) {
    this.sum.push(newOrderSum)
};
LoyaltyCard.prototype.show = function (newOrderSum) {
    console.log(`Карта ${this.id}:`)
    console.log(`Владелец: ${this.owner}`)
    console.log(`Баланс: ${this.balance} Q`)
    console.log(`Текущая скидка: ${this.discount} %`)
    console.log(`Заказы:`)
    let sum = this.sum
    sum.forEach(function (list, index) {
        console.log(`#${index + 1}  на сумму ${list}`)
    })

};




const card = new LoyaltyCard('Иванов Иван', 6300);

let newOrderSum = 7000;
let finalSum = card.getFinalSum(newOrderSum);
console.log(`Итоговая сумма для заказа на ${newOrderSum} Q по карте
  составит ${finalSum} Q. Скидка ${card.discount} %.`);

card.append(newOrderSum);
console.log(`Баланс карты после покупки ${card.balance} Q.`);
card.show();