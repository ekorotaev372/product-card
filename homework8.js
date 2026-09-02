// Создаем объект на основе личных данных
const personalProfile = {
    firstName: "Егор",
    lastName: "Коротаев",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    email: "ekorotaev372@gmail.com",
    phone: "+79534065154",
    job: "Сервисный инженер",
    age: 22,
    country: "Россия",
    city: "Азнакаево",
    relationshipStatus: "не женат",
    hobbies: ["программирование", "чтение", "игры"],
    languages: ["русский"]
}
console.log(`Полное имя: ${personalProfile.fullName()}`);
console.log(`Электронная почта: ${personalProfile.email}`);
console.log(`Телефон: ${personalProfile.phone}`);


// Создаем объект автомобиля
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'черный',
    transmission: 'автомат'
};

const owner = {
    firstName: 'Егор',
    lastName: 'Коротаев',
};
car.owner = owner;

console.log('Информация об автомобиле:');
console.log(`Марка: ${car.brand}`);
console.log(`Модель: ${car.model}`);
console.log(`Год выпуска: ${car.year}`);
console.log(`Цвет: ${car.color}`);
console.log(`Коробка передач: ${car.transmission}`);

console.log('\nИнформация о владельце:');
console.log(`ФИО: ${car.owner.firstName} ${car.owner.lastName}`);


// Функция принимает объект в качестве параметра
function addMaxSpeedProperty(vehicle) {
    if (!vehicle.hasOwnProperty('максимальная скорость')) {
        vehicle['максимальная скорость'] = 200; 
        console.log('Свойство "максимальная скорость" успешно добавлено');
    } else {
        console.log('Свойство "максимальная скорость" уже существует');
    }
}


// Функция принимает два параметра: объект и название свойства
function getPropertyValue(obj, property) {
    // Возвращаем значение свойства из объекта
    return obj[property];
}
console.log(getPropertyValue(car, 'brand'));


// массив, содержащий названия продуктов
const shoppingList = ['Молоко', 'Хлеб', 'Яйца', 'Сыр', 'Масло'];



// Исходный массив книг
const library = [
    {
        title: "Война и мир",
        author: "Л. Н. Толстой",
        year: 1869,
        coverColor: "темно-зеленый",
        genre: "Роман-эпопея"
    },
    {
        title: "1984",
        author: "Джордж Оруэлл",
        year: 1949,
        coverColor: "серый",
        genre: "Антиутопия"
    },
    {
        title: "Гарри Поттер и философский камень",
        author: "Джоан Роулинг",
        year: 1997,
        coverColor: "жёлтый",
        genre: "Фэнтези"
    },
    {
        title: "Маленький принц",
        author: "Антуан де Сент-Экзюпери",
        year: 1943,
        coverColor: "бежевый",
        genre: "Притча, философская сказка"
    }
];

// Добавляем новую книгу
library.push({
    title: "Алхимик",
    author: "Пауло Коэльо",
    year: 1988,
    coverColor: "синий",
    genre: "Притча"
});

// Создаем новый массив с книгами Marvel
const marvelBooks = [
    {
        title: "Marvel 1602",
        author: "Neil Gaiman",
        year: 2003,
        coverColor: "красный",
        genre: "Альтернативная история"
    },
    {
        title: "Ultimate Spider-Man",
        author: "Brian Michael Bendis",
        year: 2000,
        coverColor: "синий",
        genre: "Супергерои"
    },
    {
        title: "Civil War",
        author: "Mark Millar",
        year: 2006,
        coverColor: "черный",
        genre: "Супергерои"
    }
];

// Объединяем массивы с помощью оператора spread
const allBooks = [...library, ...marvelBooks];

// Выводим результаты
console.log("\nИсходный список книг:");
console.log(library);

console.log("\nСписок книг Marvel:");
console.log(marvelBooks);

console.log("\nОбъединенный список всех книг:");
console.log(allBooks);


// Функция для добавления свойства isRare
function addRareProperty(booksArray) {
    if (!Array.isArray(booksArray)) {
        throw new Error("Передан неверный тип данных. Ожидался массив");
    }

    return booksArray.map(book => {
        const newBook = { ...book };
        // Добавляем новое свойство isRare
        newBook.isRare = newBook.year >= 2000 ? true : false;
        return newBook;
    });
}
const updatedBooks = addRareProperty(allBooks);

console.log("\nОбновленный список книг с признаком редкости:");
console.log(updatedBooks);