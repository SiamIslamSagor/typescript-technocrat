{
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*             ENCAPSULATION IN OOP             */
  /* -------------------------------------------- */

  // Encapsulation means hide something from outer world, as like: privet, protected

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

    private getBalance() {
      return this._balance;
    }

    getHiddenMethod() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      //   this.getHiddenMethod;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr Goribs", 20);

  goribManusherAccount.addDeposit(200);
  //   const myBalance = goribManusherAccount.getBalance();

  //   console.log(myBalance);

  // goribManusherAccount.getHiddenMethod

  /* -------------------------------------------- */
}
