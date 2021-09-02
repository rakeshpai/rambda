import {always} from './always'
import {has} from './has'
import {identity} from './identity'
import {ifElse} from './ifElse'
import {prop} from './prop'

const condition = has('foo')
const v = function (a) {
  return typeof a === 'number'
}
const t = function (a) {
  return a + 1
}
const ifFn = x => prop('foo', x).length
const elseFn = () => false

test('happy', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({foo: 'bar'})).toEqual(3)
  expect(fn({fo: 'bar'})).toEqual(false)
})

test('ramda spec', () => {
  const ifIsNumber = ifElse(v)
  expect(ifIsNumber(t, identity)(15)).toEqual(16)
  expect(ifIsNumber(t, identity)('hello')).toEqual('hello')
})

test('pass all arguments', () => {
  const identity = function (a) {
    return a
  }
  const v = function () {
    return true
  }
  const onTrue = function (a, b) {
    expect(a).toEqual(123)
    expect(b).toEqual('abc')
  }
  ifElse(v, onTrue, identity)(123, 'abc')
})

test('accept constant as condition', () => {
  const fn = ifElse(true)(always(true))(always(false))

  expect(fn()).toEqual(true)
})

test('accept constant as condition - case 2', () => {
  const fn = ifElse(false, always(true), always(false))

  expect(fn()).toEqual(false)
})

test('curry 1', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({foo: 'bar'})).toEqual(3)
  expect(fn({fo: 'bar'})).toEqual(false)
})

test('curry 2', () => {
  const fn = ifElse(condition)(ifFn)(elseFn)

  expect(fn({foo: 'bar'})).toEqual(3)
  expect(fn({fo: 'bar'})).toEqual(false)
})

test('simple arity of 1', () => {
  const condition = x => x > 5
  const onTrue = x => x + 1
  const onFalse = x => x + 10
  const result = ifElse(condition, onTrue, onFalse)(1)
  expect(result).toBe(11)
})

test('simple arity of 2', () => {
  const condition = (x, y) => x + y > 5
  const onTrue = (x, y) => x + y + 1
  const onFalse = (x, y) => x + y + 10
  const result = ifElse(condition, onTrue, onFalse)(1, 10)
  expect(result).toBe(12)
})
