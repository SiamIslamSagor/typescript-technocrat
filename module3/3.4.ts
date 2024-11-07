{
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*               INSTANCE OF GUARD              */
  /* -------------------------------------------- */

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I am Barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log("I am Meawing");
    }
  }

  // if we want to use instanceof operator then we have to use function
  const isDog = (animal: Animal): animal is Dog => {
    // advance type of boolean:--> `animal is Dog`
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    // advance type of boolean:--> `animal is Cat`
    return animal instanceof Cat;
  };
  const getAnimal = (animal: Animal) => {
    // Type guard using instanceof operator
    if (isCat(animal)) {
      animal.makeMeaw();
    } else if (isDog(animal)) {
      animal.makeBark();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("MR Bools Dog", "dog");
  const cat = new Cat("Mully Meaw cat", "cat");

  getAnimal(dog);

  /* -------------------------------------------- */
}
