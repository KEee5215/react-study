function conter() {
  let count = 0;

  return {
    add: function () {
      count++;
    },
    get: function () {
      return count;
    },
  };
}

let counter = conter();

counter.add();
counter.add();
counter.add();

console.log(counter.get());
