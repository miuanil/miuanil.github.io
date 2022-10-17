class SavingsAccount extends Account {

    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    // set interest(interest) {
    //     this._interest = interest;
    // }

    setInterest(interest) {
        this._interest = interest;
    }

    // get interest() {
    //     return this._interest;
    // }

    getInterest() {
        return this._interest;
    }

    addInterest() {
        let interestAmount = this.getBalance() * this._interest / 100;

        if (interestAmount) {
            this.deposit(interestAmount);
        }
        
        return interestAmount;
    }

    toString() {
        return "Savings Account " + this._number + ": balance " + this._balance + ": interest rate " + this._interest;
    }

    endOfMonth() {
        let interestRes = this.addInterest();
        return "Interest added SavingsAccount " + this.getNumber() + ": balance: " + this.getBalance() + " interest: " + interestRes;
    }
}
