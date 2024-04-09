const subtract = require('./subtract')

test("all good" , () => {
  expect(
    subtract(1,2)
  ).toBe(-1)  
} )