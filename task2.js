for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    console.log("Нашли число 7!");
  } else {
    console.log("Проверяем число: " + i);
  }
}

let n = 10;
while (n >= 0) {
  if (n === 5) {
    console.log("Осталось меньше половины!");
  } else if (n === 0) {
    console.log("Готово!");
  } else {
    console.log(n);
  }
  n = n - 1;
}

let n = 1;
while (n <= 20) {
  if (n < 10) {
    console.log("Меньше 10");
  } else if (n === 10) {
    console.log("Равно 10");
  } else {
    console.log("Больше 10");
  }
  n = n + 1;
}

let sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i <= 10) {
    continue;
  }
  sum = sum + i;
}
console.log("Общая сумма: " + sum);
