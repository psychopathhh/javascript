//задание№1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2, это инкремент, сначала выполняется действие "+" затем присваивается значение: c = 1 + a
d = b++; alert(d);           // 1, это декремент, сначала присваивается значение, а потом выполняется действие "+": d = b 
c = (2+ ++a); alert(c);      // 5: 2 + 1 + a (в 3 строчке писали ++a, значит a = 2)
d = (2+ b++); alert(d);      // 4: 2 + 2 (в 4 строчке писали b++, значит b = 2. т.к. это декремент, поэтому здесь выполняется действие после присваивания значения)
alert(a);                    // 3 (т.к. в предыдущих строчках выполнялись ++a 
alert(b);                    // 3 и b++)


 //задание№2
/* var a = 2;
var x = 1 + (a *= 2); //5 */

//задание№3
/* var a = parseInt(Math.random() * 900  - 100);
var b = parseInt(Math.random() * 900 - 100);
alert(a);
alert(b);
if (a > 0 && b > 0) {
    var raz = a - b;
    alert("Разность: "+raz);
}
else if (a < 0 && b < 0) {
    var proiz = a * b;
    alert("Произведение: " + proiz);
}
else if (a > 0 && b < 0 || a < 0 && b > 0) {
    var sum = a + b;
    alert("Сумма: " + sum);
} */

//задание№4
/* a = +prompt ('Введите число от 1 до 15');
		switch (a) {
		case 1:
			console.log('1');
		case 2:
			console.log ('2');
		case 3:
			console.log ('3');
		case 4:
			console.log ('4');
		case 5:
			console.log ('5');
		case 6:
			console.log ('6');
		case 7:
			console.log ('7');
		case 8:
			console.log ('8');
		case 9:
			console.log ('9');
		case 10:
			console.log ('10');
		case 11:
			console.log ('11');
		case 12:
			console.log ('12');
		case 13:
			console.log ('13');
		case 14:
			console.log ('14');
		case 15:
			console.log ('15');
		}	 */


//задание№5
/* Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. */
/* function sum(x,y) {
    s = x + y;
    return s;
}
function raz(x,y) {
    r = x - y;
    return r;
}
function proiz(x,y) {
    p = x * y;
    return p;
}
function del(x,y) {
    d = x / y;
    return d;
} */

//задание№6
/* function mathOperation(arg1, arg2, operation){
    switch(operation) {
        case 'сложение':
            var sum = arg1 + arg2;
            return sum;
            break;
        case 'вычитание':
            var raz = arg1 - arg2;
            return raz;
            break;
        case 'деление':
            del = arg1 / arg2;
            return del;
            break;
        case 'умножение':
            var proiz = arg1 * arg2;
            return proiz;
            break;
    }
} */

//задание№8 
/* function power(val, pow) {
    num = Math.pow(val, pow);
    return num;
} */