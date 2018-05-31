'use strict'
var positions = [
    'Телепорт бытовой VZHIH-101',
    'Отвертка ультразвуковая WHO-D',
    'Ховерборд Mattel 2016',
    'Нейтрализатор FLASH black edition',
    'Меч световой FORCE (синий луч)'
];

var prices = [
    10000,
    4800,
    9200,
    2500,
    57000
];
//Задача 1

var hitName = positions[2],
    hitPrice = prices[2];
var hit = {};
hit.name = hitName;
hit.prices = hitPrice;
hit.show = function () {
    console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.prices} Q`);
}
hit.show();

//Задача 2

var items = [];
for (let i = 0; i < positions.length && i < prices.length; i++) {
    let listItems = {
        name: positions[i],
        price: prices[i]
    };
    items.push(listItems);
};

function getPositiopPrice() {
    return function (item) {
        if (item === undefined) {
            console.log(`Товара с такой позицией не существует!`)
        } else {
            console.log("Купите " + item.name + " по цене " + item.price + " Q")
        }
    }
}
var positionsNum = getPositiopPrice();
positionsNum(items[0]);
positionsNum(items[5]);

//Задача 3

function showDiscount() {
    return function (item, quantity) {
        let sales;
        if (quantity === 0) {
            console.log("Укажите кол-во товаров!");
        } else if (quantity < 10) {
            sales = 5;
        } else if (10 <= quantity && quantity < 50) {
            sales = 7;
        } else if (50 <= quantity && quantity < 100) {
            sales = 10;
        } else if (quantity >= 100) {
            sales = 15;
        }
        let order = (item.price * quantity) - (item.price * quantity * sales * 0.01);
        console.log(item.name + " - стоимость партии из " + quantity + " штук " + order + " Q (скидка " + sales + "%), ваша выгода " + (item.price * quantity * sales * 0.01) + " Q!");
    }
}

var buy = showDiscount();

buy(items[0], 12);
buy(items[3], 97);

//Задача 4
items[3].amount = 4;

function updateAmount() {
    return function (item, quantity) {
        if (!("amount" in item)) {
            return
        } else if (item.amount === 0 || quantity - 1 > item.amount) {
            console.log(item.name + " закончился на складе.")
        } else if (item.amount >= quantity + 1) {
            item.amount = item.amount - quantity;
            console.log(item.name + " — остаток " + item.amount + " шт.");
        } else {
            item.amount = 0;
            console.log("Это был последний " + item.name + ", Вам повезло!");
        }
    }
}
var buyCheck = updateAmount();

buyCheck(items[1], 17);
buyCheck(items[3], 3);
buyCheck(items[3]);