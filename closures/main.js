'use strict'
/*Задача №1*/
var time = "asd";
var guaranteePrice = calcGuarantee(time);

function calcGuarantee(time) {
    // очень много вариций. Давайте возвращать 0 на всё, что не 1 и не 2
    if (time === 1) {
        return 1250;
    } else if (time === 2) {
        return 2300;
    } else {
        return 0
    }
}
console.log(`Дополнительное гарантийное обслуживание: ${guaranteePrice} Q`);

/*Задача №2*/

var string = "sd sd       sd        asd";

function calcWordsPrice(string) {
    if (typeof (string) == "undefined") {
        return 0;
    } else if (string.trim() === '') {
        return 0;
    } else {
        var wordsPrice = 11;
        string = string.trim();
        var words = string.split(' ');
        do {
            var i = words.indexOf("");
            if (i === -1) {
                break;
            }
            words.splice(i, 1);
        } while (i >= 0);
    }


    var price = words.length * wordsPrice;
    return price;
}



// сломается, если не передам значение, а пустая строка стоит 11
var priceWords = calcWordsPrice(string);
console.log(`Подарочная упаковка и гравировка: ${priceWords} Q`)



/*Задача №3 */



var deliveryPrice;
//var delivery = true;
// нужен еще параметр — нужна доставка или нет. true/false

deliveryPrice = function calcDelivery(productDelivery, delivery) {
    if (delivery) {
        switch (productDelivery) {
            case 'Луна':
                return 150; // брейк не нужен, вы выйдете из функции строкой выше
            case 'Крабовидная туманность':
                return 250;
            case 'Галактика Туманность Андромеды':
                return 550;
            case 'Туманность Ориона':
                return 600;
            case 'Звезда смерти':
                return 'договорная цена';
            default:
                return NaN;
        }
    } else {
        return 0;
    }
}

function printCalcDelivery(delivery) {
    if (delivery === 0) {
        console.log(`Доставка не требуется`)
    } else if (delivery > 0 || delivery === "договорная цена") {
        console.log(`Стоимость доставки: ${delivery} Q`)
    } else {
        console.log(`Ошибка при расчете стоимости доставки`)
    }
}
printCalcDelivery(deliveryPrice("Луна", false));

// if (delivery) {
//     deliveryPrice = calcDelivery(productDelivery);

//     function calcDelivery(productDelivery) {
//         if (typeof productDelivery === "undefined") {
//             return 0;
//         } else {
//             switch (productDelivery) {
//                 case 'Луна':
//                     return 150; // брейк не нужен, вы выйдете из функции строкой выше
//                 case 'Крабовидная туманность':
//                     return 250;
//                 case 'Галактика Туманность Андромеды':
//                     return 550;
//                 case 'Туманность Ориона':
//                     return 600;
//                 case 'Звезда смерти':
//                     return 'договорная цена';
//                 default:
//                     return NaN;
//             }
//         }
//     }
// } else {
//     deliveryPrice = 0;
// }


// function printCalcDelivery(deliveryPrice) {
//     if (deliveryPrice === 0) {
//         console.log(`Доставка не требуется`)
//     } else if (deliveryPrice > 0 || deliveryPrice === "договорная цена") {
//         console.log(`Стоимость доставки: ${deliveryPrice} Q`)
//     } else {
//         console.log(`Ошибка при расчете стоимости доставки`)
//     }
// }
// printCalcDelivery(deliveryPrice);