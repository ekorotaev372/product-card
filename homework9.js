// Создаем массив чисел от 1 до 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(function (number) {
    return number >= 5;
});


// Создаем массив с названиями популярных фильмов
const movies = [
    "Форрест Гамп",
    "Побег из Шоушенка",
    "Зеленая миля",
    "Интерстеллар",
    "Бойцовский клуб",
    "Матрица",
    "Король говорит",
    "Начало",
    "Джанго освобожденный",
    "Властелин колец"
];


function checkMovie(movieName) {
    if (movies.includes(movieName)) {
        return(`Фильм "${movieName}" найден в коллекции!`);
    } else {
        return(`Фильм "${movieName}" не найден в коллекции.`);
    }
}


// Функция для переворота массива
function reverseArray(arr) {
    const arrayCopy = arr.slice();
    return arrayCopy.reverse();
}


import { comments } from "./comments.js";

console.log('Все комментарии:');
console.log(comments);

const filterCommentsByEmail = (comments) => {
    return comments.filter(comment =>
        comment.email.includes('.com')
    );
};

const comEmailComments = filterCommentsByEmail(comments);

console.log('\nКомментарии с email .com:');
console.log(comEmailComments);


//массив тех комментариев, почта пользователей которых содержит ".com"
const filteredComments = comments.filter(comment => comment.email.includes('.com'));

console.table(filteredComments);



const updatedComments = comments.map(comment => {
    let newPostId;
    if (comment.id <= 5) {
        newPostId = 2;
    } else {
        newPostId = 1;
    }

    return { ...comment, postId: newPostId };
});

console.table(updatedComments);



// Перебрать массив, что бы объекты состояли только из айди и имени
const simplifiedComments = Comments.map(comment => ({
    id: comment.id,
    name: comment.name
}));

console.table(simplifiedComments);

//Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.
comments.forEach(comment => {
    comment.isInvalid = comment.body.length > 180;
});

console.table(comments);
