{
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*                 OOP --> Class                */
  /* -------------------------------------------- */

  class Animal {
    // by default the access modifier is public
    // auto define

    // parameter properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      // auto initialize
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("MR Bool", "dog", "ghew ghew");

  const cat = new Animal("Mullu", "cat", "meaw meaw");

  cat.makeSound();

  /* -------------------------------------------- */
}
