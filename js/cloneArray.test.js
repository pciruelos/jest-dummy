const cloneArray = require('./cloneArray')

test('it works', () => {
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})