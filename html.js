'use strict';
let a1 = 7 + 2, a2 = 7 - 3, a3 = 2 * 4, a4 = 4 / 2 ;
console.log(a1, a2, a3, a4);

let height = 23, width = 10, s;
s = height * width;
console.log(s);

let b1 = 5 % 3, b2 = 3 % 5, b3 = 5 + '3', b4 = '5' - 3, b5 = 75 + 'кг';
console.log(b1,b2,b3,b4,b5);

let heightC = 10, dC = 4/2, v;
v = 3.14 * dC**2*heightC;
console.log(v);

let a=10, b=2;
console.log( a + b + 'summ');
console.log( a - b + 'diff');
console.log( a * b + 'proiz');
console.log( a / b + 'del');

let c=15, d = 2, result;
result = c + d;
console.log(result);

let aver2=10, bver2=2, cver2=5;
console.log(aver2+bver2+cver2+'summ');

let aver3=17, bver3=10,cver3,dver3=7,resultver3;
cver3 = aver3-bver3;
dver3 = 7;
result = cver3 + dver3;
console.log(result);

let name='Артём';
console.log(`Привет, ${name}!`);

let age=20;
console.log(`Мне ${age} лет!`);

let str = 'adcde'
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.charAt(4));

let   second = 1, hours, day, month;
hours = second*60*60;
day = hours * 24;
month = day * 30;
console.log('Секунд в часе ', hours);
console.log('Секунд в сутках ', day);
console.log('Секунд в месяце ', month);

let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
console.log(num);

let num2 = 10;
num2 ++;
num2 ++;
num2 --;
console.log(num);
