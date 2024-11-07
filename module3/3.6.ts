{
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*               GETTER AND SETTER              */
  /* -------------------------------------------- */

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    /* public addDeposit(amount: number) {
      this._balance += amount;
    } */

    /* public getBalance() {
      return this._balance;
    } */

    /* ------------------ GETTER ------------------ */
    get balance() {
      return this._balance;
    }

    /* ------------------ SETTER ------------------ */
    set deposit(amount: number) {
      this._balance += amount;
    }

    /* withdraw(amount: number) {
      if (this.balance > amount) {
        this.balance - amount;
      } else {
        console.log(
          `you can't withdraw ${amount} tk cuz your balance is ${this.balance}`
        );
      }
    } */
  }

  const goribManusherAccount = new BankAccount(111, "Mr Goribs", 208);

  //   goribManusherAccount.addDeposit(200); // function call korte hossche
  goribManusherAccount.deposit = 199;

  //   const myBalance = goribManusherAccount.getBalance(); // function call korte hossche
  const myBalance = goribManusherAccount.balance; // as use like property

  console.log(myBalance);

  /* -------------------------------------------- */
}
