// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

let countryName = prompt('Введите страну доставки!');
if (countryName === null) {
  console.log('Отменено пользователем');
} else {
  countryName =
    countryName.charAt(0).toLocaleUpperCase() +
    countryName.toLowerCase().slice(1);
  switch (countryName) {
    case 'Китай':
      alert(`Доставка в ${countryName} будет стоить 100 кредитов`);
      break;
    case 'Чили':
      alert(`Доставка в ${countryName} будет стоить 250 кредитов`);
      break;
    case 'Австралия':
      alert(`Доставка в ${countryName} будет стоить 170 кредитов`);
      break;
    case 'Индия':
      alert(`Доставка в ${countryName} будет стоить 80 кредитов`);
      break;
    case 'Ямайка':
      alert(`Доставка в ${countryName} будет стоить 120 кредитов`);
      break;
    default:
      alert(`В вашей стране доставка не доступна`);
  }
}
