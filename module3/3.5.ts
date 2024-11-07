{
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*               ACCESS MODIFIERS               */
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

    public addDeposit(amount: number) {
      this._balance += amount;
    }

    public getBalance() {
      return this._balance;
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

  class StudentAccount extends BankAccount {
    test() {
      this;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr Goribs", 20);

  // goribManusherAccount.balance = 0;
  goribManusherAccount.addDeposit(200);
  const myBalance = goribManusherAccount.getBalance();

  console.log(myBalance);

  /* -------------------------------------------- */
}
