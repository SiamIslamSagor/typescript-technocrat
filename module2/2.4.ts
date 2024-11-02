{
  //

  /* -------------------------------------------- */
  /*               GENERIC INTERFACE              */
  /* -------------------------------------------- */

  /* ---- !!! GENERICS TYPES USING INTERFACE ---- */

  interface Developer<T, TC = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    car?: TC;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display?: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "siam",
    computer: {
      brand: "hp",
      model: "hp pavilion gaming 15ex",
      releaseYear: 2000,
    },
    smartWatch: {
      brand: "Xtore",
      model: "xoox",
      display: "EMOLED",
    },
  };

  interface RolexWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface Car {
    brand: string;
    speed: number;
  }

  const richDeveloper: Developer<RolexWatch, Car> = {
    name: "sagor",
    computer: {
      brand: "hp",
      model: "hp pavilion gaming 15ex",
      releaseYear: 2003,
    },
    smartWatch: {
      brand: "rolex",
      model: "r44x",
      heartTrack: true,
      sleepTrack: true,
    },
    car: {
      brand: "bugati",
      speed: 3222,
    },
  };

  //
  //
}
