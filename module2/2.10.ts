{
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*                 MAPPED TYPES                 */
  /* -------------------------------------------- */

  const arrOfNumbers: number[] = [1, 3, 4];

  //   const arrOfString: string[] = ["1", "3", "4"];

  const arrOfString: string[] = arrOfNumbers.map(num => num.toString());

  //   console.log(arrOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };

  /* --------------- LOOK UP TYPE --------------- */
  type Height = AreaNumber["height"];
  /* -------------------------------------------- */

  /* type AreaString = {
    height: string;
    width: string;
  }; */

  //   T --> { height: string; width: number;  }
  type AreaString<T> = {
    // [key in "height" | "width"]: string;
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{
    height: string;
    width: number;
  }> = {
    height: "100",
    width: 40,
  };

  /* ------------- PRACTICE PROBLEM ------------- */

  /* TASK 6: Spread and Rest Operators, Destructuring
    Objective: Write a function that uses the rest operator for variable-length arguments.
  
    Instructions:
  
    Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments. */

  type SumOfAllNumbers = (...numbers: number[]) => number;

  const sumOfAllNumbers: SumOfAllNumbers = (...numbers) => {
    return numbers.reduce((acc, currentValue) => acc + currentValue, 0);
  };

  const res = sumOfAllNumbers(3, 6, 2, 6, 2, 6);
  console.log(res);
  /* -------------------------------------------- */

  /* Task 8: Intersection Types
    Objective: Practice using intersection types.

    Instructions:

    Create a type AdminUser that is an intersection of:
    User with properties name and email
    Admin with property adminLevel
    Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user. */

  type User = {
    name: string;
    email: string;
  };

  type Admin = {
    adminLevel: string;
  };

  type AdminUser = User & Admin;

  const userAdmin: AdminUser = {
    name: "mr x",
    email: "sdkl@ss.ew",
    adminLevel: "moderate",
  };

  /* -------------------------------------------- */
}
