class Bank {

    static nextNumber = 0;

    constructor() {
        this._accounts = [];
    }

    addAccount() {
        let number = Bank.nextNumber;
        this._accounts.push(new Account(number));
        Bank.nextNumber++;
        return number;
    }

    addSavingsAccount(interest) {
        let number = Bank.nextNumber;
        this._accounts.push(new SavingsAccount(number, interest));
        Bank.nextNumber++;
        return number;
    }

    addCheckingAccount(overdraft) {
        let number = Bank.nextNumber;
        this._accounts.push(new CheckingAccount(number, overdraft));
        Bank.nextNumber++;
        return number;
    }

    closeAccount(number) {

        let temp = [];
        let counter = 0;

        for (let i = 0; i < this._accounts.length; i++) {
            if (i != number) {
                temp[counter] = this._accounts[i];
                counter++;
            }
        }

        Bank.nextNumber--;
        this._accounts = temp;

        // 2nd Way
        // let data = this._accounts[number];

        // if (data !== undefined) {
        //     delete this._accounts[number];
        // }
    }

    accountReport() {
        return this._accounts.join(",\n");
    }

    endOfMonth() {
        for (let i = 0; i < this._accounts.length; i++) {
            if (this._accounts[i]) {
                console.log(this._accounts[i].constructor.name + ": " + this._accounts[i].endOfMonth());
            }
        }
    }
}