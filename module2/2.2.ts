{
  //

  /* -------------------------------------------- */
  /*                   INTERFACE                  */
  /* -------------------------------------------- */

  /* ---------------- TYPE ALIAS ---------------- */

  /**
   * we will use TYPE ALIAS for all primitive (specially) and non-primitive data types
   */

  type RollNumber = number;

  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRoll1 = User1 & { role: string }; // intersection

  /* ---------------- INTERFACE ---------------- */

  /**
   * we will use INTERFACE for all non-primitive (specially) data types
   */
  interface User2 {
    name: string;
    age: number;
  }

  // we can extend interface and also type like this
  interface UserWithRoll2 extends User2 {
    role: string;
  }

  interface UserWithRoll3 extends User1 {
    role: string;
  }

  const user1: UserWithRoll2 = {
    name: "siam",
    age: 29,
    role: "CEO",
  };

  //

  // JS OBJECT --> object, array, function

  /* ------------------ OBJECT ------------------ */
  interface User2 {
    name: string;
    age: number;
  }

  /* ------------------- ARRAY ------------------ */
  type Roll1 = number[]; // TYPE ALIAS

  interface Roll2 {
    [index: number]: number;
  } // INTERFACE

  const rollNumber1: Roll1 = [1, 2, 3, 4];

  const rollNumber2: Roll2 = [1, 2, 3, 4];

  /* ----------------- FUNCTION ----------------- */
  type Add1 = (n1: number, n2: number) => number; // TYPE ALIAS

  interface Add2 {
    (n1: number, n2: number): number;
  } // INTERFACE

  const add: Add1 = (n1, n2) => n1 + n2;

  /* -------------------------------------------- */
  /*                RECOMMENDATION;               */
  /* -------------------------------------------- */

  /**
   *
   * for array, function, and primitive type use TYPE ALIAS
   *
   * use INTERFACE on Object if you are maintaining OOP otherwise use Type Alias for Object also
   *
   * if we wanna extends Type Alias then we have to use INTERSECTION
   *
   * if we wanna extends Interface the we will use "extends" key word
   *
   */

  //
}
