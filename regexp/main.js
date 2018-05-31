'use strict'
//Задание 1

let codes = [
    'Madam, I’m Adam',
    'A man, a plan, a canal. Panama',
    '----<-------Eve------->-----',
    '[__777-x-44-x-777__]',
    '1234564321',
    'Olson in Oslo'
];


//Задача 1
function checkCoupon(code) {
    code = code.toLowerCase()
    let array = code.match(/[^\W_]/g);
    if (array.length >= 10) {
        let arrayRev = array.slice();
        arrayRev = arrayRev.reverse().join("");
        if (arrayRev === array.join("")) {
            return true
        } else {
            return false;
        }
    } else {
        return false
    }

}

for (let code of codes) {
    let result = checkCoupon(code) ? 'подходит' : 'не подходит';
    console.log(`Код «${code}» ${result}`);
}

//Задача 2

const texts = [
    '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
    '<EM>Световой меч</EM> в <strong>каждый</strong> дом!',
    '2 < 45 > 3'
];

function stripTags(text) {
    return text.replace(/(\<\/?[A-Za-z]+\>)/g, '');
}

for (let text of texts) {
    console.log(stripTags(text));
}

//Задача 3

const fields = [{
        name: 'name',
        rule: /^[a-z ]{5,}$/i
    },
    {
        name: 'email',
        rule: 'email'
    },
    {
        name: 'phone',
        rule: 'phone'
    },
];

const forms = [{
        name: 'Ivan Ivanov',
        email: 'ivan@test.co',
        phone: '+79236554590'
    },
    {
        name: 'III',
        email: 'ivan@test',
        phone: '11111'
    }
];

function validate(formsData, dataRequirement) {
    let regExpression;
    for (let item of dataRequirement) {
      if (typeof item.rule === 'string') {
        switch (item.name) {
          case 'email' :
            regExpression = /^[a-zA-Z0-9][a-zA-Z0-9-_\.]*@/;
          break;
          case 'phone' :
            regExpression = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
          break;
        }
        if (regExpression.test(formsData[item.name]) === false) {
          return false;
        }
      } else if (typeof item.rule !== 'string') {
        regExpression = item.rule;
        if (regExpression.test(formsData[item.name]) === false) {
          return false;
        }
      }
    }
    return true;
  }

for (let form of forms) {
    console.log(form);
    if (validate(form, fields)) {
        console.log('Ошибок нет');
    } else {
        console.log('Форма заполнена неверно');
    }
}