// Задание - 1
// let userName = prompt("Атыныз?");

// document.write(`<b>${userName.slice(0, 1).toUpperCase() + userName.slice(1).toLowerCase()}</b>`);



// Задание 2

// let total = "$120";
// document.write(total.slice(1));



//задание 3

//  let userName = prompt("Здравствуй, я компьютер, а тебя как зовут?");
//  document.write(`<i>КОМПЬЮТЕР:<i>Здравствуй, я компьютер, а тебя как зовут? <br>`)
//  document.write(`Пользователь: Здравствуй,я ${userName}!<br>`);
//  document.write(`<i>КОМПЬЮТЕР:<i> Очень приятно, ${userName}!<br>`);
//  let userAge = prompt("Сколько тебе лет?");
//  document.write("Ого! Тебе уже " + userAge);

// задание 4

let userCardNum = prompt("Номер вашей карты? (16чисел)")

document.write(`<h2>Последние 4 цифры вашей карты:</h2> ${userCardNum.slice(0, 0).concat("************")} ${userCardNum.slice(12, 16)}`);









 