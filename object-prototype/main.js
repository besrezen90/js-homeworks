'use strict'
var positions = [{
        title: 'Телепорт бытовой VZHIH-101',
        price: 10000,
        discount: 7,
        available: 3
    },
    {
        title: 'Ховерборд Mattel 2016',
        price: 9200,
        discount: 4,
        available: 14
    },
    {
        title: 'Меч световой FORCE (синий луч)',
        price: 57000,
        discount: 0,
        available: 1
    }
];


// //Задача №1
//Дополнение к Задаче №1 
const itemPrototype = {
    hold(amount = 1) {
        if (this.available < amount) {
            return false;
        }
        this.available -= amount;
        this.holded += amount;
        return true;
    },
    toString() {
        return `${this.title} (остаток ${this.available}, в резерве ${this.holded})`;
    }
};

function createItem(title, amount) {
    const item = Object.create(itemPrototype);
    item.title = title;
    item.available = amount;
    item.holded = 0;
    return item;
}

const items = [];
for (let item of positions) {
    items.push(createItem(item.title, item.available));
}

items[0].hold(2);
items[1].hold(8);
items[1].hold(12);
items[2].hold(1);


for (let item of items) {
    console.log(`Товар ${item}`);
}

//Решение

itemPrototype.unhold = function (amount = this.holded) {
    if (this.holded === 0 || this.holded < amount) {
        return false;
    }
    this.holded -= amount;
    this.available += amount;
    return true;
}
items[2].unhold(1);
items[1].unhold();

for (let item of items) {
    console.log(`Товар ${item}`);
}


// Задача №2
for (let i = 0; i < positions.length; i++) {
    const item = positions[i];
    const calc = {
        get() {
            return positions[i].price - (positions[i].price * positions[i].discount * 0.01);
        },
        set(price) {
            try {
                if (price > positions[i].price) {
                    throw new SyntaxError("Объявленная цена не может быть больше " + positions[i].price);
                }
                positions[i].discount = price * 100 / positions[i].price;
            } catch (e) {
                console.log(e.name, e.message);
            }

        }
    }
    Object.defineProperty(item, 'finalPrice', calc);
}


console.log(positions[0].finalPrice); // 9300
positions[2].finalPrice = 57000;
console.log(positions[2].discount); // 50



// Задача №3


const requiredFields = ['title', 'price', 'discount'];
let form1 = {
    title: 'Товар Телепорт бытовой VZHIH-101',
    price: 7800,
    discount: 0
};
let form2 = {
    title: 'Товар Телепорт бытовой VZHIH-101',
    discount: 10
};



function isValidPosition(form, array) {
    let formKeys = Object.keys(form);
    if (formKeys.length < array.length) {
        return false
    };
    let on = 0;
    for (let key of formKeys) {
        if (array.indexOf(key) >= 0) {
            on++
        } else {
            break
        }
    }
    return on >= array.length ? true : false;
}


if (isValidPosition(form1, requiredFields)) {
    console.log('Форма № 1 заполнена верно');
} else {
    console.log('В форме № 1 не заполнены необходимые поля');
};
if (isValidPosition(form2, requiredFields)) {
    console.log('Форма № 2 заполнена верно');
} else {
    console.log('В форме № 2 не заполнены необходимые поля');
};