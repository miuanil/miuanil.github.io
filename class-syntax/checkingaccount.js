class CheckingAccount extends Account {
    
    constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    }

    // set overdraftLimit(limit) {
    //     this._overdraftLimit = limit;
    // }
    
    // get overdraftLimit() {
    //     return this._overdraftLimit;
    // }

    setOverdraftLimit(limit) {
        this._overdraftLimit = limit;
    }
    
    getOverdraftLimit() {
        return this._overdraftLimit;
    }

    withdraw(amount) {

        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }

        if (amount > this._balance) {
            let balanceWithOverdraftLimit = this._balance + this._overdraftLimit;

            if (amount > balanceWithOverdraftLimit) {
                throw Error("Insufficient funds");
            }

            this._balance = this._balance - amount;

        } else {
            this._balance -= amount;    
        }
    }

    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance + ": overdraft limit " + this._overdraftLimit;
    }

    endOfMonth() {
        if (this.getBalance() < 0) {
            return "Warning, low balance CheckingAccount " + this.getNumber() + ": balance: " + this.getBalance() + " overdraft limit: " + this._overdraftLimit;
        }
    }

}
