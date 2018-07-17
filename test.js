import test from 'ava'

const arr = [1,2,3,4,5,6,7,8,9,10]

const range = require('./index')

test('1..10', t => {

  t.deepEqual(range(1, 10), arr)

})

test('10..1', t => {

  t.deepEqual(range(10, 1), arr.sort((prev, next) => next-prev))

})
