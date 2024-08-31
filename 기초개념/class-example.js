class Car {
  constructor(name) {
    this.name = name;
  }

  get firstCharacter() {
    return this.name[0];
  }

  set firstCharacter(char) {
    this.name = [char, ...this.name.slice(1)].join("");
  }
}

const myCar = new Car("자동차");

console.log(myCar.firstCharacter);

myCar.firstCharacter = "차";

console.log(myCar.firstCharacter, myCar.name);
