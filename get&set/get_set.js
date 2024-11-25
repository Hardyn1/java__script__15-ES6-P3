/*
    ГЕТТЕРЫ И СЕТТЕРЫ.
    Get когда мы что то получаем.
    Set когда что то устанавливаем.

    Все взаимодействия со свойствами сводятся к двум операциям:
    получение значения из свойства и присваивание нового значения свойству.

    Геттер — занимается извлечением значения из свойства, а сеттер — сохранением значения.
        
    const user = {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
    };

    console.log(user.fullName); // => Ivan Ivanov
*/

class User{
    constructor(name){
        this.name = name  
    };

    get getName(){
        return this.name;
    };

    set setName(text){
        this.name = text;
    };
};

const user = new User('Ivan');
// Так как возвращает return то console.log.
// console.log(user);

// ГЕТТЕР
const result = user.getName;
console.log(result); // Ivan.
// СЕТТЕР
user.setName = 'Igor';
console.log(user.getName); // Igor.

class Car{
    // Можно дотянуться до статичного обьекта напрямую.
    static printModel(model){
        console.log(model);
    }
};

Car.printModel('Toyota');