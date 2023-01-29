const num = Number(prompt("Введите число"))

function checkSimpleNum(num) {

    if (num === 1) {
        return alert(`число ${num}  не является ни простым, ни составным`)
    }

    if (num === 2) {
        return alert(`число ${num} простое`)
    }

    let count = 2
    while ((count < Math.sqrt(num))) {
        if ((num % count) !== 0) {
            return alert(`число ${num} простое`)
        } else {
            count++
        }

        if (count => num) {
            return alert(`число ${num} составное`)
        }

    }
}

checkSimpleNum(num)