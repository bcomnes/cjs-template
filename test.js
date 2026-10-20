const test = require('node:test')
const assert = require('node:assert')
const { foo } = require('./index')

test('index export', () => {
  assert.strictEqual(foo(), 'world', 'A message')
})
