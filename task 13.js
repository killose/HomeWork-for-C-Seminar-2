// Задача 13: Напишите программу,
// которая выводит третью цифру заданного числа или сообщает, что третьей цифры нет.

// 645 -> 5

// 78 -> третьей цифры нет

// 32679 -> 6

function isCheckNum(num){
    const transStr = String(num);
    return transStr[2] ?  Number(transStr[2]) : "Нет третьей цифры!";
  }
  console.log(isCheckNum(645));
  console.log(isCheckNum(78));
  console.log(isCheckNum(32679));

