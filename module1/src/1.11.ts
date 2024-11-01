{
  //
  /// TERNARY OPERATOR || OPTIONAL CHAINING || NULLISH COALESCING OPERATOR ////

  // TERNARY OPERATOR
  const age: number = 18;

  /* age < 18 ? console.log("teenage") : console.log("adult"); */

  /* if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  } */

  // NULLISH COALESCING OPERATOR

  // if we have to make decision depend on null || undefined the we will use nullish coalescing operator
  let isAuthenticated = "";

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest"; // TERNARY OPERATOR
  // console.log({ result1, result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string; // OPTIONAL TYPE
    };
  };
  const user: User = {
    name: "MD SIAM ISLAM SAGOR",
    address: {
      city: "rajshahi",
      road: "rj23 A- b-block 0.3",
      presentAddress: "raj, hosnigonj",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address"; // OPTIONAL CHINING

  console.log({ permanentAddress });

  //
}
