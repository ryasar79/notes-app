const square = n => {
  const result = n * n;
  return result;
};

/* const square = n => n * n;*/
console.log(square(9));

const user = {
  name: "Kevin",
  sayHi: () => {
    console.log(`Hi, I am ${this.name}`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi, I am ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt();
