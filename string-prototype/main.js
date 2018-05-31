'use strict'

function showSpecialPrice() {
    console.log('Введен секретный код. Все цены уменьшены вдвое!');
};


//Задача 1

const orders = [{
        price: 21,
        amount: 4
    },
    {
        price: 50,
        amount: '17 штук'
    },
    {
        price: 7,
        amount: '1,5 килограмма'
    },
    {
        price: 2,
        amount: ' 2.7 метра '
    },
    {
        price: 1,
        amount: 'семь единиц'
    }
];

function fixAmount(amount) {
    let a = (new String(amount)).match(/\d+/g);
    if (a) {
        if (a.length === 1) {
            return a;
        } else {
            return a.join('.');
        }
    } else {
        return -1
    }
}

for (let order of orders) {
    let result = fixAmount(order.amount);
    console.log(`Заказ на сумму: ${result * order.price} Q`);
}

//Задача 2

var keys = ['2', '4', 'R', '2', 'd', '2'];
var promo = '';

function handleKey(char) {
    promo = promo.concat(char).toUpperCase().substr(-4);
    while (promo.length >= 4 && promo.indexOf('R2D2') != -1 ) {
        showSpecialPrice();
        break;
    }

}

for (let key of keys) {
    handleKey(key);
}

// Задача 3



function parseData(tableName, topString, separator = ',') {
    let listData = [];
    for (let string of topString) {
        let arraystring = string.split(separator);
        let obList = {};
        for (let i = 0; i < tableName.length; i++) {
            obList[tableName[i]] = arraystring[i];
        }
        listData.push(obList);
    }
    return listData;
}



const data = [
    '12,Телепорт бытовой VZHIH-101 ,17,10000',
    '77, Меч световой FORCE (синий луч), 2,57000'
];

let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);


