'use strict';
//Resourses

//https://learn.javascript.ru/ - reread on learn
//https://developer.mozilla.org/ru/docs/Web/API
//https://www.w3.org/TR/dom/
//http://www.w3schools.com/
//https://developer.mozilla.org/en-US/docs/Web/API
//https://drafts.csswg.org/
//http://caniuse.com/
//https://dom.spec.whatwg.org/
//





//**************************
console.log(range(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10))); //55

//***********************
//Рекурсия
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

//****************************************************************************
//Еще рекурсия
//Вот вам загадка: можно получить бесконечное количество чисел, начиная с числа 1, и потом либо добавляя 5,
// либо умножая на 3. Как нам написать функцию, которая, получив число, пытается найти последовательность
// таких сложений и умножений, которые приводят к заданному числу? К примеру, число 13 можно получить,
// сначала умножив 1 на 3, а затем добавив 5 два раза. А число 15 вообще нельзя так получить.

function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(8));
//((1 * 3) + 5)

//********************************************
//Доступ к свойствам объекта на примере массива

var ar = [1, 2, 3]
ar.x = 4;
ar['y'] = 5;
ar['something else'] = 6;
console.log(ar); //[1, 2, 3]
console.log(ar.x); //4
console.log(ar['x']); //4
console.log(ar.y); //5
console.log(ar['something else']); //6

//*********************************************
//Передаем свойства в блоке
var descriptions = {
  work: "Пошёл на работу",
  "тронул дерево": "Дотронулся до дерева"
};
console.log(descriptions);

//{
//work:	"Пошёл на работу"
//тронул дерево:	"Дотронулся до дерева"
//}

//************************************
//Переменная хранит ссылку на изменяемый объект
a = [1, 2, 3];
b = a;
a.push(4);
a = 3;
console.log(b);
//[1, 2, 3, 4]
//*****************************************
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
//*********************************
//Числа передаются по значению. Строки аналогично.
let a = 1;
let b = a;
a.x = 2;
console.log(a.x); //undefined
a = 3;
console.log(b); //1
console.log(b.x); //undefined

//*******************************************
//Удаление, проверка на вхождение
var anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true


//********************************************
//Функции можно передавать любое число аргументов. Именованность не работает.
//Можно увидеть все аргументы в arguments
function test(x){
  console.log(x);
  console.log(arguments);
}

test(1, 4, x=5);
test(x=1, 2);

//1
//{0: 1, 1: 4, 2: 5}
//1
//{0: 1, 1: 2}

//**************************************
//Глобальные переменные
var myVar = 10;
console.log("myVar" in window);
// → true
console.log(window.myVar);
// → 10

//*********************************************
//Особенности обхода массивов
var arr = [1, 2, 3];
delete arr[1];
console.log(arr.length); //3
for (key in arr){
 console.log(arr[key]);
  //1
  //3
}
console.log(key); // 2, тк не объявили var

for (var i=0; i < arr.length; i++) {
 console.log(arr[i]);
  //1
  //undefined
  //3
}

//*******************************************
//Обращение к аттрибутам объекта
var ob = new Object();
ob.x = 1;
console.log(ob['x']);

//Примитивный искусственный массив
var ob = {
  0: 1,
  1: 2,
  2: 3,
  'length': 3
}
console.log(ob); // {0: 1, 1: 2, 2: 3, length: 3}

for (var i=0; i<ob.length; i++){
 console.log(ob[i]);
//1
//2
//3
}

for (key in ob){
  console.log(ob[key]);
//1
//2
//3
}

//*********************************************************
var test_arr = [1, 2 ,3, 4, 5, 6];
//Не меняет исходный массив
function clearReverse(arr){
  let newArr = [];
  for(var i=0; i<arr.length; i++) newArr.unshift(arr[i]);
  return newArr;
}

//Не меняет исходный массив, ошибка
function wrong_reverse(arr){
  arr = clearReverse(arr); //Локальной переменной даем новое значение

}

//Меняет исходный массив
function reverse(arr){
  for(var i=0; i<=Math.floor(arr.length/2); i++){
    var tmp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = tmp;
  }

}


console.log(clearReverse(test_arr)); //[6, 5, 4, 3, 2, 1]
console.log(test_arr); //[1, 2, 3, 4, 5, 6]
wrong_reverse(test_arr);
console.log(test_arr); //[1, 2, 3, 4, 5, 6]
reverse(test_arr);
console.log(test_arr); //[6, 5, 3, 4, 2, 1]

//*********************************************
//list

var list1 = {
  value: 1, //Можно указывать значения переменных в кавычках
  rest: {
    value: 2,
    rest: {
      value: 3
      }
   }
}

var list2 = {
  value: 0,
  rest: {
  value: list1,
  rest: {
    value: 4

   }
}
}

//***********************************
//Еще list
function arrayToList(arr){
  var list = {};
  var new_list;
  var cur_list = list;
  for(var i=0; i<arr.length; i++){
    if (i == 0) cur_list.value = arr[i];
    else{
    new_list = {value: arr[i]};
    cur_list.rest = new_list;
    cur_list = new_list;
    }
 }
    return list;
}

function listToArray1(lst){
	var arr = [];
   function getCur(lst){
 arr.push(lst.value);
    if (lst.rest != undefined) getCur(lst.rest);
  }
  getCur(lst);
  return arr;
 }

function listToArray2(lst){
  arr = [];
  arr[0] = lst.value;
  while (lst.rest != undefined){
   lst = lst.rest;
   arr.push(lst.value);
  }
 return arr;
}

//Добавляет элемент в начало
function prepend(val, list){
  var new_list = {
    value: val,
    rest: list
                 }
 return new_list;
}

//Находит элемент по номеру
function nth(list, num, pos){
  if(pos == undefined) pos = 0;
  if (pos == num) {
   return list.value;
  }
  else {
   if (list.rest == undefined) return undefined;
   return nth(list.rest, num, ++pos);
  }
}

arr = [1, 2, 3, 4];
let list = arrayToList(arr);
arr1 = listToArray1(list);
let arr2 = listToArray2(list);
//console.log(list);
//console.log(arr1);
//console.log(arr2);
list2 = prepend(0, list);
//console.log(list2);
console.log(nth(list2, 4));

//*************************************************
//Глубокое сравнение двух объектов
function get_length(ob){
  var length = 0;
  for (var key in ob){
  length += 1;
  }
  return length;
}

function deepEqual(ob1, ob2){
if (ob1 == undefined && ob1 == ob2) return true;
if(typeof ob1 == 'object' && typeof ob2 != 'object') return false;
if(typeof ob1 != 'object' && ob1 === ob2) return true;

  if (get_length(ob1) != get_length(ob2)) return false;
  for (var key in ob1){
  if (!(key in ob2 && deepEqual(ob1[key], ob2[key]))) return false;
  }
return true;
}

let obj1 = {
  x: 1,
  y: 2

}

let obj2 = {
  x: 1,
  y: 2,
  z: 3
 }

console.log(deepEqual(obj1, obj2));

//var x = [1, 2];
//var y = [1, 2];
 //console.log(x==y);  //false
//console.log(x===y); //false

//**************************************************
//Передаем функцию функции(функция высшего порядка)
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

forEach(["Тили", "Мили", "Трямдия"], console.log);
// → Тили
// → Мили
// → Трямдия

//Создаем функцию на лету
var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
});
console.log(sum);
// → 15

//На самом деле это стандартный метод массива
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(elem){
console.log(elem);

//Как это работает
var arr = [1, 2, 3];
arr.forE = function(f){
  for (var i = 0; i < this.length; i++){
    f(this[i]);
  }
}

arr.forE(function(elem){
console.log(elem);
});


});

//**************************************
//Еще пример функции высшего порядка
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

var arr = [[1, 2], [3, 4, 5]];

forEach(arr, function(inner_arr){
  forEach(inner_arr, function(elem){
  	console.log(elem);
  });
});
//***************************************
//Переменная, хранящая функцию, и имя функии - не одно и то же.
let x = 5;
function x(){}; //функция создалась, но не присвоилась переменной, поскольку переменная занята
let y = x;
let x = 3;
console.log(x); //3
console.log(y); //5

//Второй случай
function x(){}; //функция создалась, и присвоилась переменной х, поскольку переменная свободна
y = x;
x = 3;
console.log(x); //3
console.log(y); //function x(){…}

//****************************************
//Функция, создающая другую функцию
function greaterThan(n) {
  return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

//**************************************
//Получает в первом аргументе условие, во втором - функцию, которая выполнится,
//если условия == false
function unless(test, then) {
  if (!test) then();
}

//Перебирает i от нуля до аргумента times и передает каждый аргумент в функцию body
function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}

//Вызываем repeat, чтобы повторил трижды вновь созданную функцию
//которая вызывает будет выводить только четные числа
repeat(3, function(n) {
  unless(n % 2, function() {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even

//*******************************************************
function partial(func){
  var args = [].slice.call(arguments, 1);
   return function(){
    return func.apply(null, args);  //Первый аргумент задает this внутри функции.
     //При null или undefined - глобальный объект
  }
}

function sum(x, y, z){
 console.log(x + y + z);
}

let s12 = partial(sum, 1, 2);
s12(3); //6

let s23 = sum.bind(null, 2, 3); //Первый аргумент задает this внутри функции.
     //При null или undefined - глобальный объект
s23(1); //6 Аналог

//****************************************
//JSON

var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.parse(string).born);
// → 1980

//**********************************************
function filter(arr, test){
  var result = [];
  for (var i=0; i < arr.length; i++){
  if(test(arr[i])) result.push(arr[i]);
  }
return result;
}

var arr = [1, 2, 3, 4, 5];

var filtered_arr = filter(arr, function(elem){
return elem < 4;
});

console.log(filtered_arr);
//[1, 2, 3]

//Это тоже стандартный метод массива

//*******************************

function map(arr, f){
 var result = [];
  arr.forEach(function(elem){
  result.push(f(elem));
  });
return result;
}

function plusOne(x){
 return ++x;
}

var arr = [1, 2, 3, 4, 5];

var new_arr = map(arr, plusOne);
console.log(new_arr); //[2, 3, 4, 5, 6]

//И это тоже стандартный метод массива

//*******************************************
function reduce(arr, fun, start){
  var result;
  if (start != undefined){
  result = fun(start, arr[0]);
   }
  else{
  result = arr[0];
    }

  for (var i=1; i<arr.length; i++){
  result = fun(result, arr[i]);
  }
return result;
}

function fun(a, b){
return a + b;
}

var arr = [1, 2, 3, 4, 5];
var res0 = reduce(arr, fun, 2);
var res1 = arr.reduce(fun, 2);
console.log(res0); //17
console.log(res1);	//17

var arr1 = [
  {'title': 'eggs', 'count': 1},
  {'title': 'tomatoes', 'count': 3},
  {'title': 'bread', 'count': 7},
  {'title': 'milk', 'count': 5},
  {title: 'garlic', 'count': 0},
];

function fun1(min, cur){
if (cur.count < min.count) return cur;
  else return min;
}
var res3 = reduce(arr1, fun1);
var res4 = arr1.reduce(fun1);
console.log(res3); //{title: "garlic", count: 0}
console.log(res4); //{title: "garlic", count: 0}

//***
var arrays = [[1, 2, 3], [4, 5], [6]];

function line(arr){
  var newArr = arr.reduce(function(cur, next){
  return cur.concat(next);
  });

  return newArr;
}
console.log(line(arrays));
// → [1, 2, 3, 4, 5, 6]



//И это тоже стандартный метод массива

//***************************************
let ancestry = [
  {"name": "Emma de Milliano", "sex": "f",
   "born": 1876, "died": 1956,
   "father": "Petrus de Milliano",
   "mother": "Sophia van Damme"},
  {"name": "Carolus Haverbeke", "sex": "m",
   "born": 1832, "died": 1905,
   "father": "Carel Haverbeke",
   "mother": "Maria van Brussel"},
];

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

console.log(average(ancestry.filter(male).map(age)));
// → 61.67
console.log(average(ancestry.filter(female).map(age)));
// → 54.56

//Продолжение
//Найдем сколько днк от предка получает конкретный потомок(в теории).
var ancestors = [
  {name:'x', father:null, mother:null},
  {name:'a0', father:'x', mother:'a1'},
  {name:'a2', father:'a0', mother:'a3'},
  {name:'b0', father:'x', mother:'b2'},
  {name:'b3', father:'b4', mother:'b0'},
  {name:'ab0', father:'a2', mother:'b3'},
];
//  	x	a1			x   b2			1 0 1 0
//  	 a0	   a3	b4	  b0			1/2 0 0 1/2
//			a2 		   b3				1/4  1/4
//  			 ab0						1/4

  function byName(ancestors){
  var ancestorsByName = {};
  ancestors.forEach(function(ancestor){
  ancestorsByName[ancestor.name] = ancestor;
  });
return ancestorsByName;
}


//Эта функция получает долю ДНК, полученную определенным потомком от определенного предка
function reduceAncestors(person, ancestor, f){
  //Эта функция находит долю ДНК для конкретного потомка
  function valueFor(person){
  	if (person == null) return 0;
    //Для пустой персоны это 0
  	else if (person == ancestor) return 1;
    //Для искомого предка это 1
  	else return f(valueFor(ancestorsByName[person.mother]), valueFor(ancestorsByName[person.father]));
    //Для прочих это среднее арифметическое значений, полученных от родителей
    //Тут идет рекурсия, то есть последовательность такая:
    //v(внук) = (v(сын)=1/2 + v(мать)=0) /2  = 1/4
    //v(сын) = (v(искомый)=1 + v(мать)=0) / 2 = 1/2
    //фокус в том, что мы в теории бесконечно идем в верх, но на самом деле
    //заканчиваем подъем, получив предка или none. Для предка получим 1, для none 0.

  }
  return valueFor(person);
}

//Эта функция просто находит среднее арифметическое двух днк, от родителей
function countDNA(valueForMother, valueForFather){
  	return (valueForMother + valueForFather) / 2;

}

var ancestorsByName = byName(ancestors);
var person = ancestorsByName['ab0'];
var ancestor = ancestorsByName['x'];
var d = reduceAncestors(ancestors, person, ancestor, countDNA);
console.log(d); //0,25


//********************************
//stud
  function byName(ancestors){
  var ancestorsByName = {};
  ancestors.forEach(function(ancestor){
  ancestorsByName[ancestor.name] = ancestor;
  });
return ancestorsByName;
}

//Эта функция получает персону, функцию и значение по умолчанию.
//Она идет до самого верха, бесконечно вызывая
// a = combine(person, valueFor(mother)=b, valueFor(father)=c)
// b = combine(mother, valueFor(grandMother), valueFor(grandFather))
// c = combine(father, valueFor(grandMother), valueFor(grandFather))
//И так до самого верха, пока не наткнется на запись, что родитель = null.
//Тогда вернет значение по умолчанию и начнет "раскручиваться" обратно.
function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null)
      return defaultValue;
    else
      return f(person, valueFor(byName[person.mother]),
                       valueFor(byName[person.father]));
  }
  return valueFor(person);
}
// То есть, если просто.
//Значение для человека =
//combine(значение для человека + combine(значения для матери
//+ combine(дедушка и бабушка...) +
//combine(значения для отца  + combine(дедушка и бабушка...)


//Эта функция считает предков, удовлетворяющих определенному условию
function countAncestors(person, test) {
  //суммирует значения персоны(если она проходит тест) и значения от родителей
  function combine(person, fromMother, fromFather) {
    var thisOneCounts = test(person);
    return fromMother + fromFather + (thisOneCounts ? 1 : 0);
  }
  return reduceAncestors(person, combine, 0);
}
//Эта функция считает, сколько процентов предков прожили более 70 лет
function longLivingPercentage(person) {
  var all = countAncestors(person, function(person) {
    return true;
  });
  var longLiving = countAncestors(person, function(person) {
    return (person.died - person.born) >= 70;
  });
  return longLiving / all;
}
console.log(longLivingPercentage(byName["Emile Haverbeke"]));

//****************************************
//some, any
var arr = [1, 2, 3, 4, 5];
function some(arr, f){
  var flag = false;
  for (var i = 0; i < arr.length; i++){
      let elem = arr[i];
    if(f(elem)) {
    flag = true;
    break;
    }
  }
return flag;
}

function any(arr, f){
  var flag = true;
  for (var i = 0; i < arr.length; i++){
      let elem = arr[i];
    if(!f(elem)) {
    flag = false;
    break;
    }
  }
return flag;
  }

function f1(elem){
if (elem < 3) return true;
else return false;
}

function f2(elem){
if (elem > 5) return true;
else return false;
}


console.log(some(arr, f1)); // true
console.log(any(arr, f1)); //false

console.log(some(arr, f2)); //false
console.log(any(arr, f2)); //false

//Есть встроенные методы массива

//*************************
//Простейший метод

var ob = {name: 'alex'};
ob.getter = function(attr){
return this[attr];
}

console.log(ob.getter('name'));

//*******************************
//bind, call, apply
function sum(arg1, arg2){

  return this[arg1] + this[arg2];
}

var ob = {x: 4, y: 5};
ob.sum = sum;

console.log(ob.sum('x', 'y')); //9
console.log(sum.call(ob, 'x', 'y')); //9
console.log(sum.apply(ob, ['x', 'y'])); //9 то же, что call, но ждет массив
let boundSum = sum.bind(ob, 'x', 'y'); //9
console.log(boundSum()); //9
let boundSum1 = sum.bind(ob);
let console.log(boundSum1('x', 'y')); //9
let boundSum2 = sum.bind(ob, 'x');
console.log(boundSum2('y')); //9
let boundSum3 = boundSum2.bind(null, 'y'); //Не заменяет context, оставляет прежним
console.log(boundSum3()); //9
console.log(boundSum2.apply(null, ['y'])); //9 //Не заменяет context, оставляет прежним
//console.log(boundSum2.apply(null, 'y')); //error
console.log(boundSum2.call(null, 'y')); //9 //Не заменяет context, оставляет прежним
console.log(sum.call(null, 'x', 'y')); //NaN, т.к. контекст не задан

//*******************************
//Свойство пустого объекта
var empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]

console.log(Object.getPrototypeOf({}) ==  Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null

console.log(Object.getPrototypeOf(isNaN) ==  Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true

//*************************
//В современных браузерах есть два дополнительных метода для работы с __proto__. Зачем они нужны, если есть __proto__? В общем-то, не очень нужны, но по историческим причинам тоже существуют.

//Чтение: Object.getPrototypeOf(obj)
//Возвращает obj.__proto__ (кроме IE8-)
//Запись: Object.setPrototypeOf(obj, proto)
//Устанавливает obj.__proto__ = proto (кроме IE10-).
//Кроме того, есть ещё один вспомогательный метод:

//Создание объекта с прототипом: Object.create(proto, descriptors)
//Создаёт пустой объект с __proto__, равным первому аргументу (кроме IE8-), второй необязательный аргумент может содержать дескрипторы свойств.

//**************************
var animal = {
  eat: function() {
    this.full = true;
  }
};

var rabbit = {
  __proto__: animal
};

rabbit.eat();
console.log(rabbit.full); //true
console.log(rabbit.hasOwnProperty('full')); //true
//**************************
//Цепочка прототипов
var head = {
  glasses: 1
};

var table = {
  pen: 3,
  __proto__: head
};

var bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

var pockets = {
  money: 2000,
  __proto__: bed
};
console.log(pockets.glasses);

//***************************

//Не работает в IE10-
var animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
  this.__proto__ = animal;
}

var rabbit = new Rabbit("Кроль");

alert( rabbit.eats ); // true, из прототипа

//Аналогично, но работает везде
var animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;
//Свойство с именем prototype можно указать на любом объекте, но особый смысл оно имеет, лишь если назначено функции-конструктору.
//Само по себе, без вызова оператора new, оно вообще ничего не делает, его единственное назначение — указывать __proto__ для новых объектов.


var rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true


//**************************************

function Rabbit() {}

Rabbit.prototype = {
  constructor: Rabbit  //Это установлено по умолчанию
};

//Проверим
function Rabbit() {}

// в Rabbit.prototype есть одно свойство: constructor
alert( Object.getOwnPropertyNames(Rabbit.prototype) ); // constructor

// оно равно Rabbit
alert( Rabbit.prototype.constructor == Rabbit ); // true




function Rabbit(name) {
  this.name = name;
  alert( name );
}

var rabbit = new Rabbit("Кроль");

var rabbit2 = new rabbit.constructor("Крольчиха");

//***************
//Аналог Object.create для совсем старых браузеров
function inherit(proto) {
  function F() {}
  F.prototype = proto;
  var object = new F;
  return object;
}

var animal = {
  eats: true
};


var a1 = Object.create(animal);
var a2 = inherit(animal);

if (!Object.create) Object.create = inherit; /* определение inherit - выше */
//**********************************
function F(name){
this.name = name,
this.__proto__.x = 'a'
}
F.prototype.y = 'b';

var ob1 = new F('ob1');
console.log(ob1); //F{name: "ob1"}
var ob2 = new F.prototype.constructor('ob2');
console.log(ob2); //F{name: "ob1"}
var ob3 = new ob2.__proto__.constructor('ob3');
console.log(ob3); //F{name: "ob1"}
var ob4 = Object.create(F.prototype);
console.log(ob4); //F{} конструктор не вызвался
var ob5 = Object.create(ob4);
console.log(ob5); //F{}

console.log(ob1.x); //a
console.log(ob1.y); //b
console.log(ob5.x); //a !!! запись происходит напрямую в F.prototype. Лучше так не делать
console.log(ob5.y); //b
console.log(F.prototype); //F{y: "b", x: "a"}



var arr = [1, 2, 3, 4, 5];
//Класс или псевдокласс - это совокупность функции - конструктора и объекта-прототипа.
console.log(arr.__proto__ == Array.prototype);  //true
console.log(Array.prototype.__proto__ == Object.prototype); //true
console.log(Array.__proto__ == Function.prototype); //true



function Test(name){
this.name = name;
}
ob1 = new Test('ob1');
Test.prototype = {test: 'test'};
ob2 = new Test('ob2');
console.log(ob1.test); //undefined
console.log(ob2.test); //test
ob1.__proto__ = {}; //Не влияет на созданные объекты
console.log(ob2.test); //test
Object.prototype.test2 = 'test2';
console.log(ob1.test2);  //test2
console.log(ob1.__proto__.__proto__ == Object.prototype); //true


//***************************



var protoRabbit = {
  speak: function(line) {
    console.log("А " + this.type + " кролик говорит '" +  line + "'");
  }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "убийственный";
killerRabbit.speak("ХРЯЯЯСЬ!");
// → А убийственный кролик говорит ' ХРЯЯЯСЬ!'


console.log(Object.prototype);  //{}  - сам объект
console.log(Object); 	//function Object(){…} - функция-конструктор
//************************
//Простой конструктор
function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("убийственный");
var blackRabbit = new Rabbit("чёрный");
console.log(blackRabbit.type);
// → чёрный

//****************************************************************
//Простое понимание объектной модели
function Animal(name){
 this.name = name;
}
Animal.prototype.type = 'animal';

var cheetah = new Animal('cheetah');
console.log(cheetah.type); //animal

//Получается, что прототип экземпляра - это свойство prototype конструктора.
console.log(cheetah.prototype); //undefined - так не достучишься до прототипа экземпляра
console.log(Object.getPrototypeOf(cheetah)); //Animal{type: "animal"}
console.log(Animal.prototype); //Animal{type: "animal"} Это не протитип конструктора Animal,
//а свойстро прототип конструктора, которое cheetah использует как прототип
console.log(Object.getPrototypeOf(Animal) == Function.prototype); //true
//То есть для cheetah свойство протитип не заполнено, но он использует свойство прототип
//Animal.
//Для Animal свойство прототип - заполнено, его использует cheetah. При этом для самого
//Animal прототипом является свойство протитип Function
console.log(cheetah.__proto__); //Animal{type: "animal"}
console.log(Object.getPrototypeOf(cheetah)) ; //Animal{type: "animal"}

//__proto__ - это используемый прототип, свойства которого ищем, Object.getPrototypeOf - то же самое
//prototype - это свойство, которое будут использовать созданные экземпляры.
//То есть prototype для класса == __proto__ для экземпляра
// __proto__ можно переопределить
console.log(Object.getPrototypeOf(Animal) == Animal.__proto__); //true
console.log(Animal.prototype == Animal.__proto__); //false
//********************
var animal = {
  eats: true
};
var rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

// в rabbit можно найти оба свойства
alert( rabbit.jumps ); // true
alert( rabbit.eats ); // true
//Также говорят, что объект rabbit «прототипно наследует» от animal.


//*********************************************
Object.prototype.nonsense = "ку";
for (var name in map)
  console.log(name);
// → пицца
// → тронул дерево
// → nonsense
console.log("nonsense" in map);
// → true
console.log("toString" in map);
// → true

// Удалить проблемное свойство
delete Object.prototype.nonsense;


//Занятно, что toString не вылезло в цикле for/in, хотя оператор in возвращает true на его счёт. Это потому, что JavaScript различает счётные и несчётные свойства.

//Все свойства, которые мы создаём, назначая им значение – счётные. Все стандартные свойства в Object.prototype – несчётные, поэтому они не вылезают в циклах for/in.

//*************
//Мы можем объявить свои несчётные свойства через функцию Object.defineProperty, которая позволяет указывать тип создаваемого свойства.

Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "ку"});
for (var name in map)
  console.log(name);
// → пицца
// → тронул дерево
console.log(map.hiddenNonsense);
// → ку


//Если вы волнуетесь, что кто-то другой, чей код вы загрузили в свою программу, испортил основной прототип объектов, я рекомендую писать циклы for/in так:

for (var name in map) {
  if (map.hasOwnProperty(name)) {
    // ... это наше личное свойство
  }
}


//***********************************
var map = Object.create(null);
map["пицца"] = 0.069;
console.log("toString" in map);
// → false
console.log("пицца" in map);
// → true


//******************************************************



function User(name) {

  this.sayHi = function() {
    console.log( "Привет, я " + name );
  };

}

var vasya = new User("Вася"); // создали пользователя
vasya.sayHi(); // пользователь умеет говорить "Привет"


//***********************
var obj = {};

// метод берётся из прототипа?
alert( obj.toString == Object.prototype.toString ); // true, да

// проверим, правда ли что __proto__ это Object.prototype?
alert( obj.__proto__ == Object.prototype ); // true

// А есть ли __proto__ у Object.prototype?
alert( obj.__proto__.__proto__ ); // null, нет

//Запись obj = {} является краткой формой obj = new Object, где Object — встроенная функция-конструктор для объектов.

//*************************

function test(a, b, c){
var stringArgs = Array.prototype.join.call(arguments, '|');
var join = [].join;
console.log(join.call(arguments, '|'));  //1|2|c
console.log(stringArgs);  //1|2|c
arguments.join = [].join;
console.log(arguments.join('|'));  //1|2|c
arguments.join = Array.prototype.join;
console.log(arguments.join('|')); //1|2|c
console.log([].__proto__ == Array.prototype);  // true [] - экземпляр Array
arguments.__proto__.join = Array.prototype.join // или [].join  //1|2|c
console.log(arguments.join('|'));
}

test(1, 2, 'c');

//****************************************
function printArgs() {
  // вызов arr.slice() скопирует все элементы из this в новый массив
  var args = [].slice.call(arguments);
  console.log( args.join(', ') ); // args - полноценный массив из аргументов
}

printArgs('Привет', 'мой', 'мир'); // Привет, мой, мир

//***********************
func.call(context, arg1, arg2);
// идентичен вызову
func.apply(context, [arg1, arg2]);

//****************************
var arr = [];
arr.push(1);
arr.push(5);
arr.push(2);

// получить максимум из элементов arr
console.log( Math.max.apply(null, arr) ); // 5 не важно, чтоп передавать, поскольку this не будет использоваться
console.log( Math.max.apply(Math, arr) ); // 5 не важно, чтоп передавать, поскольку this не будет использоваться
console.log( Math.max(arr)); //NaN, поскольку ждет аргументы, а не массив

//*************
function f() {
  "use strict";
  alert( this ); // null
}

f.call(null);


function f() {
  alert( this ); // window
}

f.call(null);

//*********************
function test(){
  var argsSum = Array.prototype.reduce.call(arguments, function(cur, next){
  return cur + next;
  });
  console.log(argsSum);
  arguments.reduce = [].reduce; //Array.prototype.reduce
  console.log(arguments.reduce(function(cur, next){
  return cur + next;
  }));
}
//**********************************
var user = {
  firstName: "Вася",
  sayHi: function() {
    console.log( this.firstName );
  }
};
var boundSayHi = user.sayHi.bind(user);

setTimeout(user.sayHi, 1000); // undefined (не Вася)
setTimeout(boundSayHi, 1000); //  Вася
//******************************



//******************************



console.log(+"2");
//2


//****************************
'use strict';

function defer(f, ms) {
  return function() {
    let args = arguments;
    let ctx = this;
    setTimeout(function() {
      return f.apply(ctx, args);
    }, ms);
  }
}

function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  }
}


function sayHi(who) {
  alert(`Привет, ${who}!`);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("Вася"); // Привет, Вася! через 2 секунды

//****************************

let numbers = [2, 3, 15];

// Оператор ... в вызове передаст массив как список аргументов
// Этот вызов аналогичен Math.max(2, 3, 15)
//Аналог Math.max.apply(Math, numbers);
let max = Math.max(...numbers);

alert( max ); // 15



//**************************
try {
  console.log(x);
}
catch (err) {
  console.log(err); //ReferenceError: z is not defined(…)
}
 //*******************
let arr = [1, 2, 3, 4, 5];

let sliced = arr.slice(2, 4);

console.log(sliced); //[3, 4]

let reversed = sliced.reverse();

console.log(reversed); //[4, 2]
//***************************
//Пример: объединение двух массивов
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

// создает массив ["a", "b", "c", 1, 2, 3];
var alphaNumeric = alpha.concat(numeric);

//Пример: объединение трех массивов
var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

// создает массив [1, 2, 3, 4, 5, 6, 7, 8, 9];
var nums = num1.concat(num2, num3);

//Пример: добавление значений в массив
//показать чистый исходник в новом окнеСкрыть/показать номера строкпечать кода с сохранением подсветки
var alpha = ['a', 'b', 'c'];

// создает массив ["a", "b", "c", 1, 2, 3]
var alphaNumeric = alpha.concat(1, [2, 3]);

//********************************** curry
var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};

var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
greetAwkwardly("Heidi"); //"Hello...Heidi?"
greetAwkwardly("Eddie"); //"Hello...Eddie?"

//****************************
var curryIt = function(uncurried) {
    var parameters = Array.prototype.slice.call(arguments, 1);
    console.log(parameters); //["Hello", ", ", "."]
    return function() {
        console.log(parameters.concat(Array.prototype.slice.call(arguments, 0)));
        //["Hello", ", ", ".", "Heidi"]
        //["Hello", ", ", ".", "Eddie"]
        return uncurried.apply(this, parameters.concat(
            Array.prototype.slice.call(arguments, 0)
        ));
    };
};

var greeter = function(greeting, separator, emphasis, name) {
    console.log(greeting + separator + name + emphasis);
};
var greetHello = curryIt(greeter, "Hello", ", ", ".");
greetHello("Heidi"); //"Hello, Heidi."
greetHello("Eddie"); //"Hello, Eddie."

//************************


class Test {

  test(a, b, c){
    console.log(this);
    console.log(a, b, c);
  }

}

Test.prototype.curriedTest = curry(Test.prototype.test, 1, 2);
//t.__proto__.curriedTest = curry(t.__proto__.test, 1, 2);

let t = new Test;
t.test();

function curry(func, ...rest1){
  return function(...rest2){
    let self = this;
//Тут мы получим this Test {}, поскольку эта функция запускается t.curriedTest
    let args = rest1.concat(rest2);
    return func.bind(this)(...args);
  }
}

t.curriedTest(3);
//Test {}
//undefined undefined undefined
//Test {}
//1 2 3



//***********************************
let store = {};
store.dispatch = function (){
    console.log(arguments);

};

let m1 = function(store){
    let orig_dispatch = store.dispatch;
    return function(){
        console.log('m1');
        return orig_dispatch(...arguments);
    };

};
let m2 = function(store){
    let orig_dispatch = store.dispatch;
    return function(){
        console.log('m2');
        return orig_dispatch(...arguments);
    };
};
let middlewares = [m1, m2];

function applyMiddlewareByMonkeypatching(store, middlewares) {
    middlewares = middlewares.slice()
    middlewares.reverse()

    // Transform dispatch function with each middleware.
    middlewares.forEach(middleware =>
        store.dispatch = middleware(store)
    )
}

applyMiddlewareByMonkeypatching(store, middlewares);

store.dispatch(1);


//m1
//m2
//[1]

//***************************** study

let store = {};
store.dispatch = function (){
    console.log(arguments);
};

store.getState = function() {};

function logger1(store) {
    return function wrapDispatchToAddLogging(next) {
        return function dispatchAndLog(action) {
            console.log('dispatching1', action)
            let result = next(action)
            console.log('next state1', store.getState())
            return result
        }
    }
}

const logger2 = store => next => action => {
    console.log('dispatching2', action)
    let result = next(action)
    console.log('next state2', store.getState())
    return result
}

let middlewares = [logger1, logger2];

function applyMiddleware(store, middlewares) {
    middlewares = middlewares.slice()
    middlewares.reverse()


    let dispatch = store.dispatch
    middlewares.forEach(middleware =>
        dispatch = middleware(store)(dispatch)
    )

    return Object.assign({}, store, { dispatch }); //{ dispatch: dispatch}
    //Object.assign(target, ...sources)
}

let dispathed_store = applyMiddleware(store, middlewares);

dispathed_store.dispatch(1);

//**********************************


var age = prompt('Ваш возраст', 18);

switch (age) {
  case 18:
    alert( 'Никогда не сработает' ); // результат prompt - строка, а не число

  case "18": // вот так - сработает!
    alert( 'Вам 18 лет!' );
    break;

  default:
    alert( 'Любое значение, не совпавшее с case' );
}

//************************** 1191

//Перебор объекта

let obj = {a: 1, b: 2, n: 4}
obj.__proto__.c = 3

Object.defineProperty(obj, "n", {enumerable: false});


//1
for (let key in obj) {
  if(obj.hasOwnProperty(key)) console.log(key); //Без этого будет и c

}

//2
//let keyNames = Object.keys(obj); //["a", "b"] - псевдомассив
let keyNames = Object.getOwnPropertyNames(obj); //["a", "b", "n"]
keyNames.forEach(function(elem) {
  console.log(elem)
})

for (let i in keyNames) console.log(keyNames[i]) //a, b, n, 3 тк у псевдомассива еще length

//************************************************
//Перебор массива

let arr = new Array(1, 2, 3) //let arr = [1, 2, 3]

console.log(arr)
for (let i in arr) {
  console.log(arr[i])
}


//Этот способ надежнее, так как бывают псевдомассивы
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

//Этот тоже надежен
arr.forEach(function(elem) {
  console.log(elem)
})

let newArr =arr.map(function(elem) {
  return elem + 1;
})
console.log(newArr); //[2, 3, 4]

//******************************************************************************************