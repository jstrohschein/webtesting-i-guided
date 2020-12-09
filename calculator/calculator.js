module.exports = {
  add,
};

function add(x, y) {

  return x + (y ? y : 0)
}

const subtract = (x,y) => {
  return x - y;
}
