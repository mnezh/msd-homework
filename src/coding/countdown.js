const stdout = console.log // eslint-disable-line no-console
const cli_main = () => {
  const start = parseInt(process.argv[2])
  if (start>0) {
    countdown(start, stdout)
  } else {
    stdout('Usage: countdown [number]\n  number - positive integer')
  }
}

const countdown = (start, print) => {
  const numbers = [
    ['Testing', 15],
    ['Agile', 5],
    ['Software', 3]
  ]
  for (let i = start; i>0 ; i --) {
    print((numbers.find((number) => divisible(i, number[1])) || [String(i)])[0])
  }
}

const divisible = (dividend, divisor) => !(dividend % divisor)

module.exports = {
  cli_main,
  countdown
}