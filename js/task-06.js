let input;
let total = 0;

while (true) {
  input = prompt('Введите число!');
  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  } else if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }
}
