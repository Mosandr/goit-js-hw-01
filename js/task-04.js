let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

const quantity = prompt('Сколько дроидов вы хотите купить?');
if (quantity === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = pricePerDroid * Number(quantity);
    console.log(totalPrice > credits
        ? 'Недостаточно средств на счету!'
        : `Вы купили ${quantity} дроидов, на счету осталось ${credits = credits - totalPrice} кредитов.` );
}