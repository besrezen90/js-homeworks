'use String';
/*Задача 1*/
var itemName; /*Название товара*/
var itemPrice; /*Цена товара*/
/*Задача 2*/
itemName = 'Телепорт бытовой VZHIH-101';
itemPrice = '10000';
console.log(`В наличии имеется: «${itemName}»`);
console.log(`Стоимость товара ${itemPrice} Q`);
/*Задача 3*/
var quantity; /*Кол-во купленного товара*/
var discount; /*Скидка*/
var amount; /*Сумма покупки*/
quantity = 2;
discount = 0.2;
amount = ( quantity * itemPrice ) - ( quantity * itemPrice * discount);
console.log(`Цена покупки составит ${amount} Q`);
/*Задача 4*/
var score; /*Сумма денег*/
var priceLow; /*Цена закупки*/
var balance; /*Остаток кредитов после покупки*/
var items; /*Кол-во купленного товара*/
score = 52334224;
priceLow = 6500;
balance = score % priceLow;
items = (score - balance) / priceLow;
console.log(
	`Мы можем закупить ${items} единиц товара, после закупки на счету останется ${balance} Q`);