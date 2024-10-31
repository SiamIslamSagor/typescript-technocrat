{
  // SPREAD OPERATOR
  // REST OPERATOR
  // DESTRUCTURING

  // learn spread operator
  const bros1: string[] = ["mr. x", "mr. y", "mr. z"];
  const bros2: string[] = ["mr. a", "mr. b"];

  bros1.push(...bros2); // spread

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    // spread
    ...mentors1,
    ...mentors2,
  };

  // learn rest operator
  const greetFriends = (...friends) => {
    friends.forEach((frnd: string) => console.log(`Hi ${frnd}`));
  };

  greetFriends("Abul", "Kabul", "Babul", "Kobul", "Mabul");
}
