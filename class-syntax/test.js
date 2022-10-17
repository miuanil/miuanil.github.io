describe("Account: getNumber()", function() {
    
    it("checks the account number is correct", function() {
        let account = new Account(12345);
        assert.equal(12345, account.getNumber());
    });

});

describe("Account: getBalance()", function() {
    
    it("checks the balance is correct when the object is created", function() {
        let account = new Account(12345);
        assert.equal(0.0, account.getBalance());
    });

});

describe("Account: deposit()", function() {
    
    it("checks the balance, after $10 deposit", function() {
        let account = new Account(12345);
        account.deposit(10.0);
        assert.equal(10.0, account.getBalance());
    });

    it("try to deposit $-10", function() {
        let account = new Account(12345);
        
        assert.throws(() => {account.deposit(-10)}, RangeError, "Deposit amount has to be greater than zero");
    });

});

describe("Account: withdraw()", function() {
    
    it("checks the balance ($25), after $15 withdraw", function() {
        let account = new Account(12345);
        account.deposit(25.0);
        account.withdraw(10.0);
        assert.equal(15.0, account.getBalance());
    });

    it("try to amount less than $0", function() {
        let account = new Account(12345);
        
        assert.throws(() => {account.withdraw(-100)}, RangeError, "Withdraw amount has to be greater than zero");
    });

    it("try to insufficient funds", function() {
        let account = new Account(12345);
        account.deposit(25.0);
        assert.throws(() => {account.withdraw(30.0)}, Error, "Insufficient funds");
    });

});

describe("Account: toString()", function() {
    
    it("checks the toString", function() {
        let account = new Account(12345);
        account.deposit(125.75);
        assert.equal("Account 12345: balance 125.75", account);
    });

});

describe("Account: endOfMonth()", function() {
    
    it("endOfMonth", function() {
        let account = new Account(12345);
        account.deposit(125.75);
        assert.equal("", account.endOfMonth());
    });

});

describe("SavingsAccount: getInterest()", function() {
    
    it("checks the interest is correct when the object is created", function() {
        let savingsAccount = new SavingsAccount(12345, 15);
        assert.equal(15, savingsAccount.getInterest());
    });

});

describe("SavingsAccount: setInterest()", function() {
    
    it("sets and then checks the interest is correct", function() {
        let savingsAccount = new SavingsAccount(12345, 15);
        savingsAccount.setInterest(25);
        assert.equal(25, savingsAccount.getInterest());
    });

});

describe("SavingsAccount: addInterest()", function() {
    
    it("adds the interest and then checks the balance is correct", function() {
        let savingsAccount = new SavingsAccount(12345, 10);
        savingsAccount.deposit(220.50);
        savingsAccount.addInterest();

        assert.equal(242.55, savingsAccount.getBalance());
    });

});

describe("SavingsAccount: toString()", function() {
    
    it("checks the toString", function() {
        let savingsAccount = new SavingsAccount(12345, 15);
        savingsAccount.deposit(125.75);
        savingsAccount.addInterest();
        assert.equal("Savings Account 12345: balance 144.6125: interest rate 15", savingsAccount);
    });

});

describe("SavingsAccount: endOfMonth()", function() {
    
    it("endOfMonth", function() {
        let savingsAccount = new SavingsAccount(12345, 10);
        savingsAccount.deposit(250);
        assert.equal("Interest added SavingsAccount 12345: balance: 275 interest: 25", savingsAccount.endOfMonth());
    });

});


describe("CheckingAccount: getOverdraftLimit()", function() {
    
    it("checks the overdraft limit", function() {
        let checkingAccount = new CheckingAccount(12345, 250);
        assert.equal(250, checkingAccount.getOverdraftLimit());
    });

});

describe("CheckingAccount: setOverdraftLimit()", function() {
    
    it("sets and then checks the overdraft limit", function() {
        let checkingAccount = new CheckingAccount(12345, 15);
        checkingAccount.setOverdraftLimit(500);
        assert.equal(500, checkingAccount.getOverdraftLimit());
    });

});

describe("CheckingAccount: withdraw()", function() {
    
    it("withdraw (w/o overdraft) and then checks the balance is correct", function() {
        let checkingAccount = new CheckingAccount(12345, 100);
        checkingAccount.deposit(100);

        checkingAccount.withdraw(50);
    
        assert.equal(50, checkingAccount.getBalance());
    });

    it("withdraw and then checks the balance is correct", function() {
        let checkingAccount = new CheckingAccount(12345, 100);
        checkingAccount.deposit(100);

        checkingAccount.withdraw(200);

        assert.equal(-100, checkingAccount.getBalance());
    });


    it("try to amount less than $0", function() {
        let checkingAccount = new CheckingAccount(12345, 250);
        assert.throws(() => {checkingAccount.withdraw(-100)}, RangeError, "Withdraw amount has to be greater than zero");
    });

    it("insufficient funds", function() {
        let checkingAccount = new CheckingAccount(12345, 50);
        assert.throws(() => {checkingAccount.withdraw(100)}, Error, "Insufficient funds");
    });

});

describe("CheckingAccount: toString()", function() {
    
    it("checks the toString", function() {
        let checkingAccount = new CheckingAccount(12345, 250);
        checkingAccount.deposit(150);
        checkingAccount.withdraw(350);
        assert.equal("Checking Account 12345: balance -200: overdraft limit 250", checkingAccount);
    });

});

describe("CheckingAccount: endOfMonth()", function() {
    
    it("endOfMonth", function() {
        let acc = new CheckingAccount(12, 100);
        acc.deposit(250);
        acc.withdraw(300);

        assert.equal("Warning, low balance CheckingAccount 12: balance: -50 overdraft limit: 100", acc.endOfMonth());
    });

});

afterEach(() => {Bank.nextNumber = 0;});

describe("Bank: addAccount()", function() {
    
    it("adds an Account", function() {
        
        let bank = new Bank();
        bank.addAccount();
        assert.equal("Account", bank._accounts[0].constructor.name);
    });
    
});

describe("Bank: addSavingsAccount()", function() {
    it("adds a SavingsAccount", function() {
        
        let bank = new Bank();
        bank.addSavingsAccount(10);
        
        assert.equal("SavingsAccount", bank._accounts[0].constructor.name);
    });
});

describe("Bank: addCheckingAccount()", function() {
    it("adds a CheckingAccount", function() {
        
        let bank = new Bank();
        bank.addCheckingAccount(15);
        
        assert.equal("CheckingAccount", bank._accounts[0].constructor.name);
    });
});

describe("Bank: closeAccount()", function() {
    it("it closes an account", function() {
        
        let bank = new Bank();
        bank.addAccount();
        bank.addAccount();
        bank.addAccount();
        bank.addCheckingAccount(15);
        bank.addCheckingAccount(35);
        bank.addCheckingAccount(45);
        bank.addSavingsAccount(30);
        bank.addSavingsAccount(60);

        bank.closeAccount(4);
        
        assert.equal(7, bank._accounts.length);
    });
});

describe("Bank: accountReport()", function() {
    it("it prints the account reports", function() {
        
        let bank = new Bank();

        bank.addAccount();
        bank.addAccount();

        bank.addSavingsAccount(10);
        bank._accounts[2].deposit(250);

        bank.addSavingsAccount(25);
        bank._accounts[3].deposit(5000);

        bank.addCheckingAccount(500);
        bank.addCheckingAccount(250);

        assert.equal("Account 0: balance 0,\nAccount 1: balance 0,\nSavings Account 2: balance 250: interest rate 10,\nSavings Account 3: balance 5000: interest rate 25,\nChecking Account 4: balance 0: overdraft limit 500,\nChecking Account 5: balance 0: overdraft limit 250", bank.accountReport());
    });
});