// What will be the output of this program?
class Pet {
  constructor(nickName, type, pronoun, sound) {
    this.nickName = nickName;
    this.type = type;
    this.sound = sound;
    this.pronoun = pronoun;
    this.hungryLevel = 0;
  }

  makeSound() {
    console.log(`${this.nickName} says: ${this.sound}`);
  }

  feed() {
    this.hungryLevel--;
    console.log(`You fed ${this.nickName}`);
  }

  play() {
    this.hungryLevel += 3;
    console.log(`You played with ${this.nickName}`);
  }

  info() {
    console.log(`Your pet ${this.nickName} is a ${this.type}`);
    console.log(
      `${this.pronoun} is ${this.hungryLevel > 3 ? "hungry" : "not hungry"}`
    );
  }
}

const fluffy = new Pet("Fluffy", "Dragon", "he", "Shriek!");
fluffy.makeSound();
fluffy.play();
fluffy.feed();
fluffy.play();
fluffy.info();
