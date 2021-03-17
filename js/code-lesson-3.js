//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
/* i=0
while (i<=100) {
    document.write(i++ + "<br>");
} */

/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

/* var basket_price = 0;
var basket = [
    {
        name: 'Виноград',
        price: 60
    }, 
    {
        name: 'Киви', 
        price:35
    },
    {
        name: 'Клубника', 
        price: 50
    }
];
function countBasketPrice() {
    for (i=0; i<basket.length; i++) { 
        basket_price += basket[i].price;
    }
    return basket_price;
}
document.write('<h1>В корзине:</h1>');
for (i=0; i<basket.length; i++) {
    document.write(basket[i].name + ' — ' + basket[i].price +' руб</br>');
}
    document.write('</br>Стоимость заказа: ' + countBasketPrice(basket) +' руб'); */

//4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

/* var arr = [];
var a = 0;
while (a < 20) {
a++;
arr.push ('х');
console.log (arr.join(""));
} */