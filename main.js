/*
    class - это разновидность функции.

    Что делает class ?
    1) Создает функцию Код внутри берется из конструктора
    2) Методы будут сохраняться в Employee.prototype

    *
    СВОЙСТВА КЛАССОВ: salary & position. Писать перед конструктором.
    Их поменять нельзя с созданием нового экземпляра.
    А параметры внутри конструктора можно, так как создаем новый экземпляр и даем новые значения.
    *

    *
    НАСЛЕДОВАНИЕ КЛАССОВ:
*/
// class - изготовитель обьектов.
class Employee{
   
    constructor(name, age, salary, position){
        this.name = name; // = name который попадет из вне, тоесть Marina.
        this.age = age;
        this.salary = salary;
        this.position = position;
    };

    // МЕТОД КЛАССА.
    printInfo(){
        console.log('Name of Employee: ' + this.name);
    };
    printAge(){
         console.log('Age of Employee: ' + this.age);
    };
    printSalary(){
        console.log('Salary of Employee: ' + this.salary);
    }
     printPosition(){
        console.log('Position of Employee: ' + this.position);
    }
}

// Экземпляр конструктора обьекта (Создали новый обьект).
const marina = new Employee('Marina', 28, 2000, 'Developer');
// Посмотрим тип данных.
console.log(typeof Employee); // function.

marina.printInfo(); // Name of Employee: Marina.
marina.printAge(); // Age of Employee: 28

console.log(marina);
console.log(marina.position); // 'Developer'
// Добавленны новые property.

/*
    НАСЛЕДОВАНИЕ КЛАССОВ:
    Общий class Animal для всех дополнительных обьектов.
    Будет одно и тоже property со значением 'Africa'.

    И будет class Reptiles с теми же property и методы надо отнаследоваться.


*/

class Animal {
    content = 'Africa';
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    moveFast(){
         console.log('I can move fast');
    }
    eat(){
        console.log('I can eat meat');
    }
};

// Добавим метод swimming.
class Reptiles extends Animal {
    // Добавляем свой конструктор, и чтобы добавить надо вписать родительские параметра - name ^ age.
    constructor(name,age,weight){
        super(name,age); // Аргументы унаследованные от родитея через метод super.
        this.weight = weight;
    }
    swimming(){
        console.log('I can swim');
    }
    eat(){
        super.eat(); // Вывели метод отнаследовавшись от родительского class.
        console.log('I can eat fish');
    }
};

class Birds extends Reptiles {
    fly(){
        console.log('I can fly');
    }
     
};

// Новый экземпляр класса Reptiles.
const crocodile = new Reptiles('Crocodile Gena', 13, 1000);
console.log(crocodile); // Reptiles {content: 'Africa', name: 'Crocodile Gena', age: 13, weight: 1000}
// Дотянемся до его метода.
crocodile.moveFast();
crocodile.swimming();
crocodile.eat(); // Reptiles i can eat fish взял дочерний class с методом, тоесть он переписывает родительский class.

const bird = new Birds('Eagle', 28, 100);
bird.moveFast();
bird.swimming();
bird.fly();

const englishInput = document.getElementById('input-eng'),
    russianInput = document.getElementById('input-rus'),
    inputs = document.querySelectorAll('input'),
    saveButton = document.getElementById('btn'),
    table = document.getElementById('table');



// Если меньше 1 тогда ? words = [], если нет : words 
let words = localStorage.getItem('words') ? JSON.parse(localStorage.getItem('words')) : [];

let addWordToTable = index => {
    table.innerHTML += `
        <tr>
            <td>${words[index].translate}</td>
            <td>${words[index].russian}</td>
            <td><button class="delete-btn" data-index="${index}" style="color: red; font-weight: bold;">×</button></td>
        </tr>
        ` 

};

table.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const index = event.target.getAttribute('data-index');
        words.splice(index, 1);
        localStorage.setItem('words', JSON.stringify(words));
        updateTable();
    }
});



function updateTable() {
    table.innerHTML = ''; // Очищаем таблицу
    words.forEach((element, i) => {
        addWordToTable(i); // Заново добавляем элементы
    });
}



words.forEach((element, i) => {
    addWordToTable(i);
   
})

class CreateWord {
    // Слово на англ. и на русском.
    constructor(translate, russian){
        this.translate = translate;
        this.russian = russian;
    }
}; 
/*
    1) Ввести событие клик на saveButton
    2) Проверить пусты ли инпуты или не ведено ли число
*/
// Проверить является ли наши инпуты пустыми или числами ?
saveButton.addEventListener('click',() => {

    if(
        // Если введеное значение пустое.
        // Если вдруг какакя то ошибка то повесим класс error и подсветим красным.
        russianInput.value.length < 1 || // или.
        englishInput.value.length < 1 ||
        // Проверка что это не число - !isNaN.
        !isNaN(russianInput.value)  ||
        !isNaN(englishInput.value)
    ) {
        // Цикл for of пробегается по порядку.
        for(let key of inputs) {
            // Добавили на инпуты класс error с border: red; это при ошибке.
            key.classList.add('error');
        };
        // Если проверка не верна, тоесть выдает ошибку. То в другом случае else.
        // И снять border: red;
        // Теперь проверка проходит, введены текстовые значения.
    } else {
        
        for(let key of inputs) {
            key.classList.remove('error');
            key.classList.add('good');
        };

    } 

    // Сделать переменную words в массив, и она будет хранить массив слов.
    // Внутри можно создавать новый экземпляр createWord и создавать новое слово.
    words.push(new CreateWord(englishInput.value, russianInput.value));
    // Локальное хранилище.
    // 1 - Название ключа массив, 2 - Значение ключа.
    // Обьект JSON, метод stringify меняет значения в нужный формат текстовой.
    localStorage.setItem('words', JSON.stringify(words));
    addWordToTable(words.length - 1);


    
});

