// Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.
//var images = document.querySelectorAll("img");
//    var img, src;
////    function f(f) {
////                document.querySelector("img").onerror = "alert('Картинка не найдена!')";
////                }
//    for(var i = 0;i < 3;i++){
//            images[i].onclick = function(e){
//            img = document.createElement("img");
//            src = ("bigImages/b" + (e.target.id.split("")[1]));
//            img.src = src + ".jpg";
//            document.querySelector("div").append(img);
//            img.id = "b" + (e.target.id.split("")[1]);
//            }
//    }


//2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа.

var basket = [];
var products = [
    {
        name: 'Виноград',
        price: 60,
        button: 'Купить'
    }, 
    {
        name: 'Киви', 
        price:35,
        button: 'Купить'
    },
    {
        name: 'Клубника', 
        price: 50,
        button: 'Купить'
    }
];
var body = document.querySelector("body");
body.insertAdjacentHTML("afterBegin", "<header></header>");
var header = document.querySelector("header");
for (i=0; i<products.length; i++) {
    document.write('<div style="border: 1px solid black;"><h3>Название: ' + products[i].name + '</h3><h4>Цена:' + products[i].price +' руб</h4><button id="b">' + products[i].button + '</button></div><br>');
    products[i].button.onclick = function f(e){
    basket += products[i].price;
}
}
console.log(basket);

/* var but = document.createElement("button");
header.append(but);	
but.innerHTML = "Корзина"; */
//    document.write('</br>Стоимость заказа: ' + countbasketPrice(basket) +' руб');
/*function countbasketPrice() {
     for (i=0; i<basket.length; i++) { 
        basket_price += products[i].price;
    }
    return basket_price;
} */