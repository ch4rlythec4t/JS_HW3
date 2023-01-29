  const numFirst = 3
  const numSecond = 2

  const sum = (numFirst, numSecond) => numFirst + numSecond
  const diff = (numFirst, numSecond) => {
      if (numFirst > numSecond) {
          return numFirst - numSecond
      } else if (numFirst < numSecond) {
          return numSecond - numFirst
      } else if (numFirst === numSecond) {
          return 0
      }

  }

  const mult = (numFirst, numSecond) => numFirst * numSecond
  const div = (numFirst, numSecond) => numFirst / numSecond

  console.log(`Сумма чисел ${numFirst} и ${numSecond} равна ${sum (numFirst, numSecond)}`)
  console.log(`Разница чисел ${numFirst} и ${numSecond} равна ${diff (numFirst, numSecond)}`)
  console.log(`Произведение чисел ${numFirst} и ${numSecond} равно ${mult (numFirst, numSecond)}`)
  console.log(`Частное чисел ${numFirst} и ${numSecond} равно ${div (numFirst, numSecond)}`)