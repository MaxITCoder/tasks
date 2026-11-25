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
