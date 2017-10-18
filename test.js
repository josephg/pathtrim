const pathtrim = require('.')
const assert = require('assert')

{
  const result = pathtrim([
    [[-100, -100], [100, 100]]
  ], [
    [[-2, 1], [2, 1], [2, -1], [-2,-1]]  
  ], true)

  // This output is crap because pslg-to-paths produces crap output.
  assert.deepEqual(result, [ [ [ -1, -1 ], [ 1, 1 ] ] ])
}

{
  const result = pathtrim([
    [[-100, -100], [100, 100]]
  ], [
    [[-2, 1], [2, 1], [2, -1], [-2,-1]]  
  ], false)

  assert.deepEqual(result, [ [ [ -100, -100 ], [ -1, -1 ] ], [ [ 100, 100 ], [ 1, 1 ] ] ])
}

