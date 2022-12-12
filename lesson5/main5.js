// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const areaT=(a, b)=> (a * b) / 2;
// console.log(areaT(10,10));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const areaC=(r, PI) =>  PI * r ** 2;
// console.log(areaC(10, 3.14));
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const areaCyl=(r, PI, h) => 2 * PI * r * h;
// console.log(areaCyl(10, 3.14, 10));
// - створити функцію яка приймає масив та виводить кожен його елемент
// function array(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let arrElement = arr[i];
//         document.write(`<div>${arrElement}</div>`)
//     }
// }

// array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(par) {
//     document.write(`<p>${par}</p>`);
// }
//
// paragraph(prompt());
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function new1(li1) {
//     document.write(`<ul>
// <li>${li1}</li>
// <li>${li1}</li>
// <li>${li1}</li>
// </ul>`)
//
// }
// new1(prompt());
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function new2(li2, j) {
//     document.write(`<ul>`);
//     for (let i = 0; i < j; i++) {
//
//         document.write(`<li>${li2}</li>`)
//     }
//     (`</ul>`);
// }
//
// new2(prompt(), +prompt());
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arrOfTypes(arr) {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//
//
//         document.write(`<li>${arrElement}</li>`)
//
//     }
//     (`</ul>`)
// }
//
// arrOfTypes([1, 'text', true]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function arrOfObjects(arr) {
//     for (let arrElement of arr) {
//         document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
//     }
// }
//
// arrOfObjects([{id: 1, name: 'Oleg', age: 24}, {id: 2, name: 'Olga', age: 25}])
// - створити функцію яка повертає найменьше число з масиву
// const arr = [-1, 0, 1, 2, 3, 4, 5];
//
// function numberMin(arr) {
//     x = Math.min(...arr);
//     document.write(`<div>${x}</div>`);
// }
//
// numberMin(arr);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// arr = [3, 2, 5, 6];
//
// function arraySum(arr) {
//     sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     document.write(`<div>${sum}</div>`);
// }
//
// arraySum(arr);
