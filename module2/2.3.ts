{
  //

  /* -------------------------------------------- */
  /*           Introduction to generics           */
  /* -------------------------------------------- */

  /* -------- ! GENERICS TYPES USING TYPE ------- */
  /* -------------------------------------------- */
  /* -------------------------------------------- */

  /* ----------- ARRAY USING GENERICS ----------- */

  type GenericArray1 = Array<number>;
  type GenericArray2<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 34, 2, 43, 4];
  //   const rollNumbers: Array<number> = [3, 34, 2, 43, 4];
  const rollNumbers2: GenericArray1 = [3, 34, 2, 43, 4];

  //   const mentors: string[] = ["mezba", "tonmoy", "mir"];
  //   const mentors: Array<string> = ["mezba", "tonmoy", "mir"];
  const mentors2: GenericArray2<string> = ["mezba", "tonmoy", "mir"];

  //   const boolArray: boolean[] = [true, true, true, false, true];
  //   const boolArray: Array<boolean> = [true, true, true, false, true];
  const boolArray2: GenericArray2<boolean> = [true, true, true, false, true];

  /* ------ ARRAY OF OBJECT USING GENERICS ------ */

  const user: GenericArray2<{
    name: string;
    age: number;
  }> = [
    {
      name: "siam",
      age: 12,
    },
    {
      name: "sagor",
      age: 44,
    },
  ];

  /* -------------------------------------------- */

  interface User {
    name: string;
    age: number;
  }

  const user2: GenericArray2<User> = [
    {
      name: "siam",
      age: 12,
    },
    {
      name: "sagor",
      age: 44,
    },
  ];

  /* ----------- TUPLE USING GENERICS ----------- */

  type GenericTuple<X, Y> = [X, Y];

  //   const manus: [string, string] = ["mr. x", "mst. y"];
  const manus: GenericTuple<string, string> = ["mr. x", "mst. y"];

  const UserWithID: GenericTuple<
    number,
    {
      name: string;
      email: string;
    }
  > = [
    124,
    {
      name: "siam ",
      email: "mdsiamislamsagor.gmail.com",
    },
  ];

  /* -------------------------------------------- */

  const add = (x: number, y: number): number => x + y;

  add(30, 20);

  //
}
