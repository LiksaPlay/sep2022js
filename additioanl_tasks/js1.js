// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3) {
    console.log('it`s big arr,3 or more element`s');
} else if (friends.length < 3) {
    console.log('it`s small arr,2 or less element`s');
}
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
let arr = [1, 2, 3];
console.log(arr[1]);
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
if (arr[1] > arr[0] && arr[1] < arr[2]) {
    console.log('it`s middle number');
}
//я не до кінця розумію умову, потрібна пояснююча бригада


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
let a = 3;
let b = 0;
let result = (a + b < 4) ? 'Мало' : 'Багато';
console.log(result);
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let c = 0;
let result2 = (c < 0) ? 'негативнe' : (c > 0) ? 'позитивнe' : 'нуль';
console.log(result2);
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = true;
if (test === true) {
    console.log('Вірно');
} else if (test === false) {
    console.log('Неправильно');
}
let test2 = false ? 'Вірно' : 'Неправильно';
console.log(test2);
// не впевнений, що я правильно зрозумів умову
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let q=prompt();
// if(q==='ECMAScript'){
//     console.log('Правильно!');
// }else {
//     console.log('Не знаєте? ECMAScript!');
// }
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

const entrance1 = Array.from({length: 20}, (_, index) => index + 1);
const entrance2 = Array.from({length: 28}, (_, index) => index + 20 + 1);
const entrance3 = Array.from({length: 42}, (_, index) => index + 48 + 1);
let t = 48;
let res = (t <= entrance1[19]) ? 'entrance1' : (t >= entrance2[0] && t <= entrance2[27]) ? 'entrance2' : (t > entrance2[27] && t <= entrance3[41]) ? 'entrance3' : 'try again';
console.log(res);
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let h = 10;
let number = (h === 10) ? 'ВІРНО' : 'НЕВІРНО';
console.log(number);
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temp = 3;
if (temp >= 10 && temp <= 22) {
    console.log('go study');
} else {
    console.log('stay home');
}
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let vict = 5;
switch (vict) {
    case 1:console.log('Авто');
    break;
    case 2:console.log('Мото');
    break;
    case 3:console.log('Телефон');
    break;
    case 4:console.log('АвтоТелефон');
    break;
    case 5:console.log('МотоТелефон');
    break;
    default:console.log('число не вірне');
}