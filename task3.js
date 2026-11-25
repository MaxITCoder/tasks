for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    continue;
  }
  if (i === 17) {
    console.log("Стоп!");
    break;
  }
  console.log(i);
}

let money = 1000;
for (let i = 1; i <= 10; i++) {
  if (i === 3 || i === 7) {
    continue;
  }
  if (money < 150) {
    console.log("Денег больше нет!");
    break;
  }
  money = money - 150;
  console.log(money);
}
console.log("Осталось: " + money);
