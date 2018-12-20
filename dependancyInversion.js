// Dependency inversion


//  entites should not depend on concrete implementation but abstract.
// this ensures that the important parts of an application or framework aren’t affected when the low level components need to change.

// trigger transfer is a utility... therefore we have abstracted the transfer options we can easily substitute our transfer request networks easily.

class AccountTransfer {
    constructor(amount, mobileOption) {
        this.amount = amount;
        this.mobileOption = mobileOption;
    }

    triggerTransfer() {
        this.amount.forEach(amt => {
            this.mobileOption.requestTransfer(amt);
        });
    }
}

class MobileOption1 {
    constructor() {
        this.NETWORK = 'Safaricom';
    }

    requestTransfer(amt){
        console.log(`request to transfer ${amt} through ${this.NETWORK} `);
    }
}

class MobileOption2 {
    constructor() {
        this.NETWORK = 'Airtel';
    }

    requestTransfer(amt){
        console.log(`request to transfer ${amt} through ${this.NETWORK} `);
    }
}

class MobileOption3 {
    constructor() {
        this.NETWORK = 'My Network';
    }

    requestTransfer(amt){
        console.log(`request to transfer ${amt} through ${this.NETWORK} `);
    }
}

const Amounts = new AccountTransfer(['40000', '5689934'], new MobileOption1())
Amounts.triggerTransfer();