// Reference Type --> Object

const user: {
  // company: "DEV"; // type --> literal type | custom type with fixed value
  readonly company: "DEV"; // type --> literal type | use readonly access modifier and that will be not changeable
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "DEV",
  firstName: "MD Siam",
  // middleName: "Islam",
  lastName: "Sagor",
  isMarried: false,
};
