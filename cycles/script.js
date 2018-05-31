'use strict'

var positions = [
    'Отвертка ультразвуковая WHO-D',
    'Ховерборд Mattel 2016',
    'Нейтрализатор FLASH black edition',
    'Меч световой FORCE (синий луч)',
    'Машина времени DeLorean',
    'Репликатор домашний STAR-94',
    'Лингвенсор 000-17',
    'Целеуказатель электронный WAY-Y'
]
//Задача 1
var positionsLength = positions.length;
console.log("Список наименований:");
for (var i = 0; i < positions.length; i++) {
    console.log((i + 1) + " - " + positions[i]);
};
//Задача 2
var positionsNew = positions.slice();
var positionsNewLength = positionsNew.length;
positionsNew.push('Экзоскелет Trooper-111', 'Нейроинтерфейс игровой SEGUN', 'Семена дерева Эйва');
console.log("Окончательный список наименований:");
for (var i = 0; i < positionsNew.length; i++) {
    console.log((i + 1) + " - " + positionsNew[i]);
};
// //Задача 3
// var prioritetList = positionsNew.slice(); //Копируем окончательный список из Задачи №2
// var indexNames = prioritetList.indexOf('Машина времени DeLorean'); //Записываем в переменную индекс Машины времени
// var prioritetItem = prioritetList.splice(indexNames, 1); //Вырезаем Машину времени из массива
// var [firstPrioritetItem] = prioritetItem; //Переносим первый элемент массива с Машиной времени в переменную
// var prioritetListNew = prioritetList.unshift(firstPrioritetItem); //Вставлеям переменную с "Машиной времени" в первую ячейку массива
// var prioritet = 'Принять в первую очередь';
// console.log("Самый окончательный список наименований:");
// for (var i = 0; i < prioritetList.length; i++) {
//     if (i < 3) {
//         console.log((i + 1) + " - " + prioritet + " - " + prioritetList[i]);
//     } else {
//         console.log((i + 1) + " - " + prioritetList[i]);
//     }
// };

/*var prioritetItem = prioritetItem.join(''); // верно, что вы попытались решить задачу: получить строку из массива. Но решение сейчас плохое: задача, которую выполняет метод `join()` — склеивание элементов массива в строку. В вашем случае это работает корректно, но решение неустойчивое — захотим вырезать два элемента и все сломается.
// Задачу получения элемента из массива можно решить минимум тремя различными способами: по индексу, деструктуризацией или подходящим методом. Попробуйте 

var prioritetListNew = prioritetList.unshift(prioritetItem); //Вставлеям строку в первую ячейку массива
var prioritet = 'Принять в первую очередь';
console.log("Самый окончательный список наименований:");
for (var i = 0; i < prioritetList.length; i++) {
    if (i < 3) {
        console.log((i + 1) + " - " + prioritet + " - " + prioritetList[i]);
    } else {
        console.log((i + 1) + " - " + prioritetList[i]);
    }
};
*/