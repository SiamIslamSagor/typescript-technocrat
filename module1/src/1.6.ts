{
  // Learning function
  // Normal Function
  // Arrow Function

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(2, 2);

  const arrowAdd = (num1: number, num2: number): number => num1 + num2;

  // Object > function --> it's called method
  const poorUser = {
    name: "Siam",
    balance: 0,
    addBalance(balance: number): string {
      return `My new balance is: ${this.balance + balance}`;
    },
  };

  const arr: number[] = [2, 4, 2, 5, 6, 3];

  const newArr: number[] = arr.map((el: number): number => el * el);
}
