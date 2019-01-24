const assert = require('assert')
const { countdown } = require('../../src/coding/countdown')

describe('Counts backwards', () => {
  let capture_output = []
  const mock_print = (str) => capture_output.push(str)
  beforeEach(()=>{
    capture_output = []
  })
  it('counts backwards from value provided by user to 1', () =>{
    countdown(16, mock_print)
    assert.strictEqual(capture_output.length, 16)
    assert.strictEqual(capture_output[0], '16')
    assert.strictEqual(capture_output[8], '8')
    assert.strictEqual(capture_output[15], '1')
  })
  it('prints “Agile” if the number is divisible by 5', () => {
    countdown(25, mock_print)
    assert.strictEqual(capture_output[0], 'Agile')
  })
  it('prints “Software” if the number is divisible by 3', () => {
    countdown(9, mock_print)
    assert.strictEqual(capture_output[0], 'Software')
  })
  it('prints “Testing” if the number is divisible by both', () => {
    countdown(30, mock_print)
    assert.strictEqual(capture_output[0], 'Testing')
  })
})