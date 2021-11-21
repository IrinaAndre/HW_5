//task #1
let user = {};

user.name = 'John';

user.surname = 'Smith';

user.name = 'Pete';

delete user.name;

//task #2
//Объект, объявленный с помощью const может быть изменён, так как мы изменяем содержание объекта, а не значение переменной.

//task #3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

let result = 0;
for (let sum in salaries) {
  result += salaries[sum];
}

alert(result);