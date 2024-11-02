{
  //

  /* -------------------------------------------- */
  /*             FUNCTION WITH GENERIC            */
  /* -------------------------------------------- */

  /* ---- GENERIC FUNCTION WITH ARRAY RETURN ---- */

  const createArray = (param: string): string[] => {
    return [param];
  };
  const res1 = createArray("bd");

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resGeneric = createArrayWithGeneric<boolean>(false);

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 76,
    name: "siam",
  });

  /* ---- GENERIC FUNCTION WITH TUPLE RETURN ---- */

  const createTupleWithGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res2 = createTupleWithGeneric<string, number>("Bangladesh", 944);

  const res3 = createTupleWithGeneric<
    string,
    {
      name: string;
    }
  >("Bangladesh", {
    name: "asia",
  });

  /* -------------------------------------------- */

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development!";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "mrx",
    email: "mrx@gmail.com",
    devType: "Next Lvl",
  });

  const student2 = addCourseToStudent<{
    name: string;
    email: string;
    hasSmartWatch: string;
    watchPrice: number;
  }>({
    name: "mry",
    email: "mry@gmail.com",
    hasSmartWatch: "noo",
    watchPrice: 2099,
  });

  //
}
