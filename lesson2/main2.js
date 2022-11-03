// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr2a = [1, 2, 3, 4, 5, 'oleg', 'dog', true, false, 'cat'];
console.log(arr2a[0]);
console.log(arr2a[1]);
console.log(arr2a[2]);
console.log(arr2a[3]);
console.log(arr2a[4]);
console.log(arr2a[5]);
console.log(arr2a[6]);
console.log(arr2a[7]);
console.log(arr2a[8]);
console.log(arr2a[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'namebook1',
    pageCount: 123,
    ganre: 'document1',
}
console.log(book1);
let book2 = {
    title: 'namebook2',
    pageCount: 1234,
    ganre: 'document2',
}
console.log(book2);
let book3 = {
    title: 'namebook3',
    pageCount: 1235,
    ganre: 'document3',
}
console.log(book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4 = {
    title: 'namebook1',
    pageCount: 123,
    ganre: 'document1',
    authors:
        [{
            name: 'Oleg'
        },
            {
                age: 22
            }]

}
console.log(book4.authors[0]);
let book5 = {
    title: 'namebook2',
    pageCount: 1234,
    ganre: 'document2',
    authors:
        [{
            name: 'Ivan'
        },
            {
                age: 23
            }]
}
console.log(book5.authors[1]);
let book6 = {
    title: 'namebook3',
    pageCount: 1235,
    ganre: 'document3',
    authors:
        [{
            name: 'Taras'
        },
            {
                age: 24
            }]
}
console.log(book6.authors);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr2b = [
    user0 = {name: 'Oleg0', userName: 'Liksa0', password: 112},
    user1 = {name: 'Oleg1', userName: 'Liksa1', password: 123},
    user2 = {name: 'Oleg2', userName: 'Liksa2', password: 234},
    user3 = {name: 'Oleg3', userName: 'Liksa3', password: 345},
    user4 = {name: 'Oleg4', userName: 'Liksa4', password: 456},
    user5 = {name: 'Oleg5', userName: 'Liksa5', password: 567},
    user6 = {name: 'Oleg6', userName: 'Liksa6', password: 678},
    user7 = {name: 'Oleg7', userName: 'Liksa7', password: 789},
    user8 = {name: 'Oleg8', userName: 'Liksa8', password: 890},
    user9 = {name: 'Oleg9', userName: 'Liksa9', password: 901},
];
console.log (arr2b[0].password);
console.log (arr2b[1].password);
console.log (arr2b[2].password);
console.log (arr2b[3].password);
console.log (arr2b[4].password);
console.log (arr2b[5].password);
console.log (arr2b[6].password);
console.log (arr2b[7].password);
console.log (arr2b[8].password);
console.log (arr2b[9].password);