{
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*              OOP --> INHERITANCE             */
  /* -------------------------------------------- */

  class Person {
    public name: string;
    public age: number;
    public address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleepTime(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      // send the parameter to the parent class using `super` method
      super(name, age, address);
    }
  }

  const student1 = new Student("Siam", 19, "Bangladesh");
  student1;

  class Teacher extends Person {
    public designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      // send the parameter to the parent class using `super` method
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take ${numberOfClass} classes`);
    }
  }

  const teacher1 = new Teacher("MR X", 49, "UK", "Professor");
  teacher1;

  /* -------------------------------------------- */
}
