const uuid = require('')

module.exports = {
  add,
  personMaker,
};

function personMaker(name, age) {
  return { id: '', name, age, foo: 'bar' };
}

function add(...numbers) {
  // TDD STEP 2 - write the least amount of code
  // that will make the test pass
  return numbers.reduce((accumulator, num) => {
    return accumulator + num
  })
}
// TDD STEP 3 - now you refactor the code
// to make it nicer (the tests have your back)
