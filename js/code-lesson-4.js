/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */
/* function changeNumber() {
    var max = 999;
    var digit = {
        number: 0,
        units: 0,
        tens: 0,
        hundreds: 0,
    };
    digit.number = +prompt('Введите число от 0 до 999: ');
    if (digit.number < 10){
        digit.units = digit.number;
        alert("единицы: " + digit.units);
    } else if (digit.number < 100) {
        digit.units = Math.floor(digit.number % 10);
        digit.tens = Math.floor(digit.number / 10 % 10);
        alert("единицы: " + digit.units + "\nдесятки: " + digit.tens);
    } else if (digit.number <= 999){
        digit.units = Math.floor(digit.number % 10);
        digit.tens = Math.floor(digit.number / 10 % 10);
        digit.hundreds = Math.floor(digit.number / 100 % 10);
        alert("единицы: " + digit.units + "\nдесятки: " + digit.tens + "\nсотни: " + digit.hundreds);
    }else {
        digit.number = 0;
        alert('Вы ввели число за диапазоном 0 - 999');
    }
}

changeNumber() */