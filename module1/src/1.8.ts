{
  // Destructuring

  // Object Destructuring
  const user = {
    id: 345,
    name: {
      firstName: "MD Siam",
      middleName: "Islam",
      lastName: "Sagor",
    },
    contactNo: "012939393",
    address: "uganda",
  };

  const {
    contactNo,
    name: { middleName },
  } = user;

  //   Array Destructuring
  const myFriends = ["caman", "naman", "vamman", "korban", "monica", "konika"];

  const [, , bestFriend, ...rest] = myFriends;
}
