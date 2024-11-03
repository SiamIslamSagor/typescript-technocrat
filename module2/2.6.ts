{
  //

  /* -------------------------------------------- */
  /*          CONSTRAINTS IN TYPESCRIPT          */
  /* -------------------------------------------- */

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string } // T type er moddhe constant vabe id, name, email required kore dewa holo.
  >(
    student: T
  ) => {
    const course = "Next Level Web Development!";

    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 422,
    name: "mr z",
    email: "sdlkj",
    emni: "emni", // its not required
  });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
    // hasSmartWatch: string;
    // watchPrice: number;
  }>({
    id: 392,
    name: "mrx",
    email: "mrx@gmail.com",
    devType: "Next Lvl",
  });

  const student2 = addCourseToStudent({
    id: 393,
    name: "mry",
    email: "mry@gmail.com",
    hasSmartWatch: "noo",
  });

  //
}
