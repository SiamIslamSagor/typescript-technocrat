{
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*                 UTILITY TYPES                */
  /* -------------------------------------------- */

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  /* --------------- PICK UTILITY --------------- */

  // use Pick utility to pick an specific property from a type
  type NameAge = Pick<Person, "name" | "age">;

  /* --------------- OMIT UTILITY --------------- */

  // to remove specific property from a type
  type ContactInfo = Omit<Person, "name" | "age">;

  /* -------------- REQUIRED UTILITY ------------- */

  // if we want to make a type what will contain all required property, to make previous type optional to required the we will use REQUIRED utility
  type PersonRequired = Required<Person>;

  /* -------------- PARTIAL UTILITY ------------- */
  // it's use to make all property optional
  type PersonPartial = Partial<Person>;

  /* ------------- READ ONLY UTILITY ------------ */
  // if we want to make a read only type

  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "Mr XYZ",
    age: 34,
    contactNo: "01799****",
  };

  person1.name = "sdf";

  /* ------------ RECORD TYPE UTILITY ----------- */

  //   Record<key type, value type>
  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};

  EmptyObj.age = 23;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    e: 32,
  };

  /* -------------------------------------------- */
}
