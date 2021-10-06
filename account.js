const Account = function (name, transactions){
    this.name = name;
    this.transactions = [];
}
Account.prototype.addTransaction = function(newTransaction){
    this.transactions.push(newTransaction);
    console.log('Transactions:', this.transactions);
}


module.exports = Account;