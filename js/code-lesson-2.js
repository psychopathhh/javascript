//задание№1
/* var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2, это инкремент, сначала выполняется действие "+" затем присваивается значение: c = 1 + a
d = b++; alert(d);           // 1, это декремент, сначала присваивается значение, а потом выполняется действие "+": d = b 
c = (2+ ++a); alert(c);      // 5: 2 + 1 + a (в 3 строчке писали ++a, значит a = 2)
d = (2+ b++); alert(d);      // 4: 2 + 2 (в 4 строчке писали b++, значит b = 2. т.к. это декремент, поэтому здесь выполняется действие после присваивания значения)
alert(a);                    // 3 (т.к. в предыдущих строчках выполнялись ++a 
alert(b);                    // 3 и b++) */


 //задание№2
/* var a = 2;
var x = 1 + (a *= 2); //5 */

//задание№3
/* var a, b;
a = parseInt(prompt("Введите значение переменной a"));
b = parseInt(prompt("Введите значение переменной b"));

if(a>=0 && b>=0){
    alert("Оба положительные! Разность: "+(a-b));
}
else if (a<0 && b<0){
    alert("Оба отризательные! Произведение: "+(a*b));
}
else{
    alert("Знаки разные! Сумма: "+(a+b));
} */

//задание№4
/* var a = parseInt(prompt("Введите число от 0 до 15"));
switch (a){
    case 0:
	   document.write(0);    
       
	case 1:
        document.write("1");        
    case 2:
        document.write("2 ");
    case 3:
        document.write("3 ");
    case 4: 
        document.write("4 ");
    case 5:
        document.write("5 ");
    case 6:
        document.write("6 ");
    case 7:
        document.write("7 ");
    case 8:
        document.write("8 ");
    case 9:
        document.write("9 ");
    case 10:
        document.write("10 ");
    case 11:
        document.write("11 ");
    case 12:
        document.write("12 ");
    case 13:
        document.write("13 ");
    case 14:
        document.write("14 ");
    case 15:
        document.write("15 ");
        break;
    default:
        document.write("Неверно выполнен ввод числа");
        break;
}
    */


//задание№5
/* Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. */
/*function sum (x, y){
    return x+y;
}
function dif (x, y){
    return x-y;
}
function mul (x, y){
    return x*y;
}
function div (x, y){ 
    if(y!=0)
      return x/y;
    else
      alert("На 0 делить нельзя!");
     
}

var a = parseFloat(prompt("Введите число a"));
var b = parseFloat(prompt("Введите число b"));

alert("Сумма: " + sum(a,b) + "\nРазность: " + dif(a,b) + "\nПроизведение: " + mul(a,b) + "\nЧастное: " + div(a,b));*/

//задание№6
/* function sum (x, y){
    return x+y;
}
function dif (x, y){
    return x-y;
}
function mul (x, y){
    return x*y;
}
function div (x, y){
    return x/y; 
}

function mathOperation(arg1, arg2, operation){
    switch (operation){
        case "sum":
            return sum(arg1, arg2);
            break;
        case "dif":
            return dif(arg1, arg2);
            break;
        case "mul":
            return mul(arg1, arg2);
            break;
        case "div":
            return div(arg1, arg2);
            break;
        default:
            return NaN;
            break;
    }
}

var a = parseFloat(prompt("Введите число a"));//10
var b = parseFloat(prompt("Введите число b"));//20
var oper = prompt("Введите операцию над числами: sum, dif, mul, div");//sum

alert("Результат операции: " + mathOperation(a, b, oper)); */

//задание№8 
/* function power(val, pow){
    if(pow==1){
      return val;
    }
    if(pow==0){
      return 1;
    }
    
     
    if (pow>0){
      var temp = val * power(val,pow-1);
        
      console.log(temp);
      return temp;
    } 
    return (1/val) * (power(val, pow+1));
}
//power(2,3) =  2 * power(2,2) = 2 * 2  * power(2,1) =  2 * 2  * 2

var a = parseFloat(prompt("Введите число"));
var b = parseInt(prompt("Введите положительную, отрицательную или нулевую степнь"));
alert("Результат: " + power(a, b));

function power(val, pow){
    if(pow == 0){
        return 1;
    }
	if(pow == 1){
		return val;
	}
   
	return val * power(val, pow-1);
  }
  //2 ^ 3 = 2 * power(2, 2) = 2 * 2 * 2
console.log(power(2, 10));

} */