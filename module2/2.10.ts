{
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*                 MAPPED TYPES                 */
  /* -------------------------------------------- */

  const arrOfNumbers: number[] = [1, 3, 4];

  //   const arrOfString: string[] = ["1", "3", "4"];

  const arrOfString: string[] = arrOfNumbers.map(num => num.toString());

  console.log(arrOfString);

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

  /* -------------------------------------------- */
}
