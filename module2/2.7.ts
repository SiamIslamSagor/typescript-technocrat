{
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*    GENERIC CONSTRAINT WITH KEYOF OPERATOR    */
  /* -------------------------------------------- */

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle; // using keyof operator

  const person1: Owner = "car";
  const person2: Owner2 = "car";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr x",
    age: 23,
    address: "sdf",
  };

  const car = {
    model: "x09dd",
    color: "white",
    year: 2000,
  };

  const result1 = getPropertyValue(car, "model");

  /* -------------------------------------------- */
}
