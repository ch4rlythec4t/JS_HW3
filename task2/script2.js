const wage = Number(prompt("Введите вашу зарплату"))
const procent = wage => wage * 0.87
wage === NaN ? alert("Неверные данные") : alert(`Размер заработной платы за вычетом налогов равен значение ${procent(wage)}`)