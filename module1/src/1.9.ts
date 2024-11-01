{
  // Type Alias

  // type alias for object
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Siam",
    age: 19,
    gender: "male",
    contactNo: "01883838383",
    address: "bd",
  };

  const student2: Student = {
    name: "Sijan",
    age: 14,
    gender: "male",
    address: "bd",
  };

  const student3: Student = {
    name: "Shamim",
    age: 4,
    gender: "male",
    address: "bd",
  };

  // type alias for single value
  type Username = string;
  type IsAdmin = boolean;

  const userName: Username = "mdsiamislamsagor.dev";
  const isAdmin: IsAdmin = false;

  //////////////////////////////

  // type alias for function
  type Add = (n1: number, n2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
