///////////// BASIC DATA TYPE ///////////////

// if i hard code the type of variable then it's called expressive data type and if tsc infer the data type by himself then it's called implicit data type. Usually implicit data type work when we assign a value on variable.

// string
let firstName = "Md Siam Islam"; // implicit data type
let lastName: string = "Sagor"; // expressive data type

// number
let roll: number = 620387;

// boolean
let isAdmin: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

// any, we will ignore this data type when writing code.
let d;

// Array
let friends: string[] = ["mr. x", "mr. y"];
let eligibleRollList: number[] = [3, 5];

// tuple --> array --> order --> type of values
let coordinates: [number, number] = [1, 5];

let ageName: [number, string, boolean] = [32, "mr. x", true];
