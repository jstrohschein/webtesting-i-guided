module.exports = {
  add,
};

function add(...numbers) {
  // TDD STEP 2 - write the least amount of code
  // that will make the test pass
  return numbers.reduce((accumulator, num) => {
    return acc + num
  })
}
// TDD STEP 3 - now you refactor the code
// to make it nicer (the tests have your back)
