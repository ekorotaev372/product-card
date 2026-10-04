class Drink {
    constructor(name, size, price, temperature) {
        if (new.target === Drink) {
            throw new Error("Класс Drink является абстрактным и не может быть инстанцирован напрямую.");
        }
        
        this.name = name;
        this.size = size;
        this.price = price;
        this._temperature = temperature; 
    }

    _temperature;

    _prepare() {
        throw new Error("Метод _prepare() должен быть реализован в наследнике.");
    }

    setTemperature(newTemp) {
        if (typeof newTemp !== 'number' || newTemp < 0) {
            console.error("Температура должна быть положительным числом.");
            return;
        }
        this._temperature = newTemp;
        console.log(`Температура ${this.name} изменена на ${this._temperature}°C.`);
    }

    getTemperature() {
        return this._temperature;
    }

    getInfo() {
        return `Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price} руб., Температура: ${this._temperature}°C`;
    }

    serve() {
        console.log(`--- Подача ${this.name} ---`);
        this._prepare(); 
        console.log(`${this.name} подан. Приятного аппетита!`);
    }
}

// 2. Наследники

class Lemonade extends Drink {
    constructor(size, price, temperature, isSparkling) {
        super("Лимонад", size, price, temperature);
        this.isSparkling = isSparkling;
    }

    _prepare() {
        const gas = this.isSparkling ? "с газом" : "без газа";
        console.log(`Смешиваем лимоны, воду и сахар. Делаем лимонад ${gas}. Охлаждаем до ${this._temperature}°C.`);
    }

    getInfo() {
        const baseInfo = super.getInfo();
        const gas = this.isSparkling ? "Газированный" : "Негазированный";
        return `${baseInfo}, Тип: ${gas}`;
    }
}

class Coffee extends Drink {
    constructor(size, price, temperature, beanType, milkType) {
        super("Кофе", size, price, temperature);
        this.beanType = beanType;
        this.milkType = milkType;
    }

    _prepare() {
        console.log(`Мелем зерна ${this.beanType}. Взбиваем ${this.milkType}. Варим эспрессо. Нагреваем до ${this._temperature}°C.`);
    }

    getInfo() {
        const baseInfo = super.getInfo();
        return `${baseInfo}, Зерна: ${this.beanType}, Молоко: ${this.milkType}`;
    }
}

class Tea extends Drink {
    constructor(size, price, temperature, teaType, hasSugar) {
        super("Чай", size, price, temperature);
        this.teaType = teaType;
        this.hasSugar = hasSugar;
    }

    _prepare() {
        const sugar = this.hasSugar ? "с сахаром" : "без сахара";
        console.log(`Завариваем ${this.teaType} чай. Добавляем ${sugar}. Настаиваем при ${this._temperature}°C.`);
    }

    getInfo() {
        const baseInfo = super.getInfo();
        const sugar = this.hasSugar ? "с сахаром" : "без сахара";
        return `${baseInfo}, Сорт: ${this.teaType}, ${sugar}`;
    }
}

class HotChocolate extends Drink {
    constructor(size, price, temperature, cocoaPercent, withMarshmallows) {
        super("Горячий шоколад", size, price, temperature);
        this.cocoaPercent = cocoaPercent;
        this.withMarshmallows = withMarshmallows;
    }

    _prepare() {
        const marshmallows = this.withMarshmallows ? "с зефирками" : "без добавок";
        console.log(`Растапливаем ${this.cocoaPercent}% какао. Перемешиваем. Нагреваем до ${this._temperature}°C. ${marshmallows}`);
    }

    getInfo() {
        const baseInfo = super.getInfo();
        const marshmallows = this.withMarshmallows ? ", с зефирками" : "";
        return `${baseInfo}, Какао: ${this.cocoaPercent}%${marshmallows}`;
    }
}

class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getInfo() {
        return `Кафе "${this.name}", расположенное по адресу: ${this.location}`;
    }

    orderDrink(drink) {
        console.log(`\nКлиент заказал: ${drink.name}`);
        
        if (drink.getTemperature() < 40 && drink.name !== "Лимонад") {
            console.log("Напиток остыл. Бариста подогревает его до оптимальной температуры.");
            drink.setTemperature(65);
        }

        drink.serve();
        
        console.log(`С клиента списано ${drink.price} рублей.\n`);
    }
}

const myCafe = new Cafe("Уютный уголок", "ул. Пушкина, д. 10");
console.log(myCafe.getInfo());

const espresso = new Coffee("Малый", 150, 70, "Арабика", "Овсяное");
const coldLemonade = new Lemonade("Средний", 200, 5, true);
const greenTea = new Tea("Большой", 120, 80, "Зеленый с жасмином", false);

console.log(espresso.getInfo());

myCafe.orderDrink(espresso);
myCafe.orderDrink(coldLemonade);
myCafe.orderDrink(greenTea);
