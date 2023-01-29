const numFirst = Number(prompt("Введите первое число"))
const numSecond = Number(prompt("Введите второе число"))
const numThrid = Number(prompt("Введите третье число"))

function maxNum(numFirst, numSecond, numThrid) {
    let max = numFirst

    if (numSecond > max) {
        max = numSecond
    }

    if (numThrid > max) {
        max = numThrid
    }

    return max
}

alert(`Максимально число из чисел ${numFirst}, ${numSecond}, ${numThrid} является ${maxNum(numFirst, numSecond, numThrid)}`)