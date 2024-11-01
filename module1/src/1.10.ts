{
  //
  ////// UNION AND INTERSECTION TYPES ///////

  /**
   * in JS if we write two pipe "||" its called Logical OR on the other hand if we write one pipe "|" in TS it's called UNION type
   *
   * in JS if we write two and "&&" its called Logical AND on the other hand if we write one and "&" in TS it's called INTERSECTION type
   */

  /* type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullStackDeveloper = "frontendDeveloper" | "SeniorDeveloper";

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDev: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  };

  const user1: User = {
    name: "Md Siam Islam Sagor",
    gender: "male",
    bloodGroup: "O+",
  };

  const developer: Developer = "SeniorDeveloper"; */

  type FrontendDev = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDev = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDev = FrontendDev & BackendDev;

  const fullStackDeveloper: FullStackDev = {
    skills: ["html", "css", "express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}
