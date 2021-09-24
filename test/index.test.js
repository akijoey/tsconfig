const config = require('../tsconfig')

describe('tsconfig', () => {
  it('correct export', () => {
    const index = require('..')
    expect(index).toEqual(config)
  })
})
