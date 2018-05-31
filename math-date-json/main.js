'use strict'
var positions = [{
        title: 'Телепорт бытовой VZHIH-101',
        producer: {
            name: 'Рязанский телепортостроительный завод',
            deferPeriod: 10,
            lot: 3
        },
        price: 10000
    },
    {
        title: 'Ховерборд Mattel 2016',
        producer: {
            name: 'Волжский Ховерборд Завод',
            deferPeriod: 24,
            lot: 14
        },
        price: 9200
    },
    {
        title: 'Меч световой FORCE (синий луч)',
        producer: {
            name: 'Тульский оружейный комбинат',
            deferPeriod: 5,
            lot: 1
        },
        price: 57000
    }
];

console.log("Задача 1");

// var result;
// result = function lotCalculator(i, quantity) {
//     var item = positions[i],
//         producer = item.producer;

//     function calcPrice() {
//         let lot = producer.lot;
//         return Math.ceil(quantity / lot);
//     };
//     let lotQuantity = calcPrice(),
//         allPrice = lotQuantity * item.price * producer.lot,
//         lotsTotal = {};
//     lotsTotal['lotQuantity'] = lotQuantity;
//     lotsTotal['allPrice'] = allPrice;
//     console.log(item.title + " - " + quantity + " штук: заказать партий " + lotsTotal.lotQuantity + ", стоимость " + lotsTotal.allPrice + " Q.");
// }

// result(1, 15);
// result(2, 1);

/* Задача №1 (исправленная) */

function lotCalculator (item, quantity) {
  let lots = Math.ceil(quantity / item.producer.lot),
  total = lots * item.producer.lot * item.price,
  lotsTotal = {};
  lotsTotal.lots = lots;
  lotsTotal.total = total;
  return lotsTotal;
  }

  
var result = lotCalculator(positions[1], 15);
console.log(positions[1].title + " - " + 15 + " штук: заказать партий " +  result.lots + ", стоимость " + result.total + " Q.");
console.log(result);






console.log("Задача 2"); //Исправлено

const deferedPayments = [];
const producer = {  
    name: 'Рязанский телепортостроительный завод',
    deferPeriod: 10
  };
function deferPay(item, amount, dateUser) {
    //item = producer;
    let paymentDate = new Date(dateUser.getTime())//dateUser;
    paymentDate.setDate(paymentDate.getDate() + item.deferPeriod);
    //dateUser.setDate(dateUser.getDate() + item.deferPeriod);
    let paymentList = {};
    paymentList['producer'] = item;
    paymentList['amount'] = amount;
    paymentList['paymentDate'] = paymentDate;
    deferedPayments.push(paymentList);   
}
deferPay(producer, 7200, new Date(2030, 4 - 1, 10));
console.log(deferedPayments.length); // 1
console.log(deferedPayments[0].producer.name); // Рязанский телепортостроительный завод
console.log(deferedPayments[0].amount); // 7200
console.log(deferedPayments[0].paymentDate); // Sat Apr 20 2030 00:00:00 GMT

for (var i = 0; i < deferedPayments.length; i++) {
        console.log(deferedPayments[i].paymentDate.toLocaleDateString('ru-Ru') + ": " + deferedPayments[i].producer.name + ", сумма " + deferedPayments[i].amount + " Q");
    }



console.log("Задача 3");


function loadCurrencyJSON() {
    return '{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,"BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,"CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,"ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,"CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}';
}


function convertCurrency(amount, from, to) {
    var respons = loadCurrencyJSON();
    if (respons) {
        try {
            let jsObCurrency = JSON.parse(respons);
            return Math.round(((amount * jsObCurrency[from] / jsObCurrency[to])) * 100) / 100;
        } catch (err) {
            console.log(err.name, err.message);
        }
    }
}

let amountCurrency = 400;

let price1 = convertCurrency(amountCurrency, 'ZZZ', 'USD');
console.log(`Сумма ${price1} USD`);

let price2 = convertCurrency(amountCurrency, 'GBP', 'CNY');
console.log(`Сумма ${price2} CNY`);