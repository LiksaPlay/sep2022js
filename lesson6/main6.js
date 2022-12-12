// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool';
console.log(str3.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str4 = 'hello world';
console.log(str4.toUpperCase());
let str5 = 'lorem ipsum';
console.log(str5.toUpperCase());
let str6 = 'javascript is cool';
console.log(str6.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str7 = 'HELLO WORLD';
console.log(str7.toLowerCase());
let str8 = 'LOREM IPSUM';
console.log(str8.toLowerCase());
let str9 = 'JAVASCRIPT IS COOL';
console.log(str9.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str0 = 'Ревуть воли як ясла повні';
console.log(str0.split(' '));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(newArr = arr.map(value => value.toString()));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
const nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
console.log(sortedNums1 = nums.sort(function (a, b) {
    return a - b;
}));
// sortNums(nums,'descending') // [21,11,3]
console.log(sortedNums1 = nums.sort(function (a, b) {
    return b - a;
}));
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(sortedMonthDuration = coursesAndDurationArray.sort(function (a, b) {
    return b.monthDuration - a.monthDuration;
}));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter5 = coursesAndDurationArray.filter(function (value) {
    return value.monthDuration > 5;
})
console.log(filter5);

// описати колоду карт
deckOfCards = [
    {value: 'joker', color: 'red'},
    {value: 'joker', color: 'black'},
    {cardSuit: 'spade', value: 2, color: 'black'},
    {cardSuit: 'spade', value: 3, color: 'black'},
    {cardSuit: 'spade', value: 4, color: 'black'},
    {cardSuit: 'spade', value: 5, color: 'black'},
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 2, color: 'black'},
    {cardSuit: 'clubs', value: 3, color: 'black'},
    {cardSuit: 'clubs', value: 4, color: 'black'},
    {cardSuit: 'clubs', value: 5, color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 2, color: 'red'},
    {cardSuit: 'diamond', value: 3, color: 'red'},
    {cardSuit: 'diamond', value: 4, color: 'red'},
    {cardSuit: 'diamond', value: 5, color: 'red'},
    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'diamond', value: 8, color: 'red'},
    {cardSuit: 'diamond', value: 9, color: 'red'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 2, color: 'red'},
    {cardSuit: 'heart', value: 3, color: 'red'},
    {cardSuit: 'heart', value: 4, color: 'red'},
    {cardSuit: 'heart', value: 5, color: 'red'},
    {cardSuit: 'heart', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 7, color: 'red'},
    {cardSuit: 'heart', value: 8, color: 'red'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'heart', value: 10, color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
];
// - знайти піковий туз
console.log(deckOfCards.find(value => value.value === 'ace' && value.cardSuit === 'spade'));
// - всі шістки
console.log(deckOfCards.filter(value => value.value === 6));
// - всі червоні карти
console.log(deckOfCards.filter(value => value.color === 'red'));
// - всі буби
console.log(deckOfCards.filter(value => value.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(deckOfCards.filter(value => (value.cardSuit === 'clubs' && value.value >= 9) || (value.cardSuit === 'clubs' && typeof value.value === 'string')));

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
let reduse = deckOfCards.reduce((accum, value) => {
    if (value.cardSuit === 'spade') {
        accum.spades.push(value);
    } else if (value.cardSuit === 'diamond') {
        accum.diamonds.push(value);
    } else if (value.cardSuit === 'heart') {
        accum.hearts.push(value);
    } else if (value.cardSuit === 'clubs') {
        accum.clubs.push(value);
    }
    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduse);