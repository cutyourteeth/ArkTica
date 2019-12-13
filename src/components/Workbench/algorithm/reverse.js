/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const raw = x.toString()
  const condition = /^(-)/.test(raw)

  let arr = raw.split('')

  let target = []
  while (arr.length > 0) {
    const one = arr.pop()
    target.push(one)
  }

  let result = parseInt(target.join(''), 10)
  if (condition) {
    result = result * -1
  }
  console.log( -Math.pow(2, 32) - 1)
  console.log( Math.pow(2, 32) )
  if (result > Math.pow(2, 31)-1 || result < -Math.pow(2, 31)) {
    result = 0
  }
  return result
}

// console.log(reverse(-120))
console.log(reverse(1563847412))
