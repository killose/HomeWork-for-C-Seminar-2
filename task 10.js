// Задача 10: Напишите программу,
// которая принимает на вход трёхзначное число и на выходе показывает вторую цифру этого числа.

// 456 -> 5
// 782 -> 8
// 918 -> 1

function isCheckNum(num){
    const transStr = String(num);
    if (num >= 100){
    return Number(transStr[1])
    }
  }
  console.log(isCheckNum(456));
  console.log(isCheckNum(782));
  console.log(isCheckNum(918));