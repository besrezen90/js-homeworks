'use String';
/*Задача №1*/ 
var productWarehause; /*Товаров на складе*/
var productOrder; /*Товаров в заказе*/
productWarehause = 40;
productOrder = 40;
if (productWarehause > productOrder) {
	console.log("Заказ оформлен");
} else if (productWarehause == productOrder) {
	console.log("Вы забираете весь товар c нашего склада!");
} else {
	console.log("На складе нет такого количества товаров");
}

/*Задача №2*/ 	
var productDelivery;
var productPrice;
productDelivery = 'Луна';
switch (productDelivery) {
	case 'Луна' :
	productPrice = 150;
	console.log(`Стоимость доставки для области ${productDelivery}: ${productPrice} Q`);
	break;
	case 'Крабовидная туманность' :
	productPrice = 250;
	console.log(`Стоимость доставки для области ${productDelivery}: ${productPrice} Q`);
	break;
	case 'Галактика Туманность Андромеды' :
	productPrice = 550;
	console.log(`Стоимость доставки для области ${productDelivery}: ${productPrice} Q`);
	break;
	case 'Туманность Ориона' :
	productPrice = 600;
	console.log(`Стоимость доставки для области ${productDelivery}: ${productPrice} Q`);
	break;
	case 'Звезда смерти' :
	productPrice = 'договорная цена';
	console.log(`Стоимость доставки для области ${productDelivery}: ${productPrice} Q`);
	break;
	default:
	console.log(`В ваш квадрант доставка не осуществляется`);
	}
/*Задача №3*/ 
var price = 8; 
try {
	if (typeof(price) !== 'number') {
		throw `${price} не является числом`;
}
console.log(`Цена товара введена корректно`);
} 
catch (err) {
console.log(`Вы допустили ошибку: ${err}`);
}

/*Задача №4*/
var planet;
var age;
planet = 'Юпитер';
age = 119;
switch (planet) {
	case 'Земля':
		if ( age < 18 ) {
				console.log(`Вы не достигли совершеннолетия`);
				} else {
					console.log(`Приятных покупок`);
				}
	break;
	case 'Юпитер':
		if ( age < 120 ) {
				console.log(`Сожалеем. Вернитесь на 120-й день рождения!`);
				} else {
					console.log(`Чистого неба и удачных покупок!`);
				}
	break;
	default:
	console.log(`Спасибо, что пользуетесь услугами нашего магазина!`);
	}

