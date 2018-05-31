'use strict'

const clients = [{
    name: 'Филип Фрай',
    email: 'fray@mail.un',
    isSubscribed: false,
    orders: [11700, 1980, 450, 5500]
}, {
    name: 'Бендер Сгибатель Родригес',
    email: 'bender.rodriges@rambler.un',
    isSubscribed: true,
    orders: [440, 226, 7650, 2990, 70]
}, {
    name: 'Доктор Джон Зоидберг',
    email: 'zoidberg-md@list.un',
    isSubscribed: true,
    orders: [720]
}];

//Задача 1


clients.findByName = function (name) {
    return clients.find(function (obj) {
        // эта анонимная функция сообщает, смотрим мы на искомый элемент или нет. Она должна возвращать либо true (элемент подходит), либо false.
        // вы сейчас возвращаете объект, либо undefined (неявно)
        if (obj.name === name) {
            return true
        } else {
            return false
        }
    });
}

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email); // zoidberg-md@list.un

const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo); // undefined

//Задача 2
function compareByTotalSumm(left, right) {
    // попробуйте применить reduce для расчета суммы
    let orderLeft = left.orders.reduce(function (memo, el) {
        return memo + el;
    }, 0);

    let orderRight = right.orders.reduce(function (memo, el) {
        return memo + el;
    }, 0);

    if (orderLeft > orderRight) {
        return -1
    } else if (orderLeft < orderRight) {
        return 1
    } else { // 1. используете присваивание вместо сравнения
        // 2. здесь вообще ничего проверять не нужно — у сравнения три исхода, два вы уже проверили выше. Этот получается методом исключения
        return 0
    }
}

clients
    .sort(compareByTotalSumm)
    .forEach(client => console.log(client.name));

//Задача 3

function sendMail(email) {
    console.log(`Письмо отправлено на адрес ${email}`);
}

function getSubscribedEmails(list) {
    const emailList = [];
    // сделайте хотя бы forEach
    list.forEach(function (element){
        if (element.isSubscribed) {
            emailList.push(element.email)
        }
    });
    return emailList;
}

getSubscribedEmails(clients).forEach(sendMail);