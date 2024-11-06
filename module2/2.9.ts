{
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*               CONDITIONAL TYPE               */
  /* -------------------------------------------- */

  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false; // conditional type, it's depend on another type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  // keyof Sheikh --> "car" | "bike" | "ship" | "plane"

  // car or bike or ship or tractor ache ki na?
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasPlane = CheckVehicle<"plane">;

  /* -------------------------------------------- */
}
