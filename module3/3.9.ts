{
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*                  ABSTRACTION                 */
  /* -------------------------------------------- */

  /* - ABSTRACTION --> 1. INTERFACE 2. ABSTRACT - */

  /* -------- 1. ABSTRACTION USING INTERFACE ------- */

  // structure idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I'm starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I'm stopping the car`);
    }
    move(): void {
      console.log(`I'm moving the car`);
    }
    test() {
      console.log("i am moving");
    }
  }

  const toyotaCar = new Car1();
  //   toyotaCar.startEngine();

  /* -------- 2. ABSTRACTION USING ABSTRACT CLASS ------- */

  // structure idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("i am moving");
    }
  }

  // real implementation
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }
    move(): void {
      console.log("I am moving the car");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
  }

  //   const hondaCar = new Car2();
  //   hondaCar.startEngine();
  /* -------------------------------------------- */
}
