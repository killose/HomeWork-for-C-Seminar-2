// Задача 15: Напишите программу, 
// которая принимает на вход цифру, обозначающую день недели, и проверяет, является ли этот день выходным.

// 6 -> да
// 7 -> да
// 1 -> нет

function dayOfWeek(numWeek){
  if(numWeek == 6 || numWeek == 7){
    return "да это выходной";
  }
  return "нет, не выходной";
}

console.log(dayOfWeek(6))
console.log(dayOfWeek(7))
console.log(dayOfWeek(1))