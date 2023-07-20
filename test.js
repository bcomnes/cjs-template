const test = require('node:test')
const assert = require('node:assert')
const { foo } = require('./index')

test('index export', async (t) => {
  assert.strictEqual(foo(), 'world', 'A message')
})

