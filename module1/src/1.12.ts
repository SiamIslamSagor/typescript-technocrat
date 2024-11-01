{
  //

  /* ----------------------------- NULLABLE TYPES ----------------------------- */

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("there is nothing to search!!!");
    }
  };

  searchName(null);

  /* ------------------------------ UNKNOWN TYPES ----------------------------- */

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is: ${convertedSpeed}ms^-1`);
    } else if (typeof value === "string") {
      const [numericValue, unit] = value.split(" ");
      const convertedSpeed: number = (parseFloat(numericValue) * 1000) / 3600;
      console.log(`The speed is: ${convertedSpeed}ms^-1`);
    } else {
      console.log("Wrong input");
    }
  };

  getSpeedInMeterPerSecond(null);

  /* ---------------- NEVER TYPES --------------- */

  // if the func is not returning anything, then it will be a NEVER type

  const throwErr = (msg: string): never => {
    throw new Error(msg);
  };

  //   throwErr("mushkil se error hogaya");

  //
}
