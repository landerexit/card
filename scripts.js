const presentYear = new Date().getFullYear();
const presentMonth = new Date().getMonth();

document.querySelector('#exp').innerHTML = `Опыт - ${presentYear - 2021} г. ${presentMonth ? (presentMonth + ' м.') : ''}`;