"use strict";
//First
let celsiy = 20;
let farengeit = celsiy * 1.8 + 32;
console.log("Farengeit: " + farengeit);

//Second
let valueMonth = 31;
let hours = valueMonth * 24;
console.log("Hours in this month is: " + hours);
let minute = 24 * 60 * valueMonth;
console.log("Minute in this month is: " + minute);

//Third
let enegry = 100;
console.log(enegry - 99 + " Low energy");
let hp = 100;
console.log(hp - 99 + " Low health");

//Fourth
let sumBuy = 100;
let sale = 10;
let cost = sumBuy * sale;
console.log("Cost with sale is: " + cost);

//Fifth
let number = 768.565;
console.log("Answer: " + Math.floor(number));

//Sixth
let stringFloat = "11.99qwerty";
console.log("Float number: " + Number.parseFloat(stringFloat));

//Seventh
let stringNum = "9qwerty";
console.log("Integet number: " + Number.parseFloat(stringNum));

//Eighth
let root = 35;
console.log("Root of this number is: " + Math.sqrt(root));

//Ninth
let strNum = "58";
let intNum = 76;
let changeNum = Number.parseInt(strNum);
let changeStr = intNum.toString();
console.log("This is str type but in change: " + changeNum);
console.log("This is int type but in change: " + intNum);
