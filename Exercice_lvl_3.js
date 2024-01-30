//1. DEVELOP PROGRAM WHICH CALCULATE MEASURE OF CENTRAL TENDENCY OF A SAMPLE : MEAN, MEDIAN, MODE AND MESURE OF 
//   VARIABILITY : RANGE, VARIANCE, STANDART DEVIATION. IN ADDITION FIND : MIN, MAX, COUNT, PERCENTILE AND FREQUENCY
//   DISTRIBUTION OF THE SAMPLE.

class Statistics {
    constructor(data) {
        this.data = data;
    }
    count() {
        return this.data.length;
    }
    sum() {
        return this.data.reduce((total, value) => total + value, 0);
    }
    min() {
        return Math.min(...this.data);
    }
    max() {
        return Math.max(...this.data);
    }
    range() {
        return this.max() - this.min();
    }
    mean() {
        return this.sum() / this.count();
    }
    median() {
        const sortedData = [...this.data].sort((a, b) => a - b);
        const mid = Math.floor(sortedData.length / 2);
        
        if (sortedData.length % 2 === 0) {
            return (sortedData[mid - 1] + sortedData[mid]) / 2;
        } else {
            return sortedData[mid];
        }
    }
    mode() {
        const frequencyMap = {};
        this.data.forEach((value) => {
            frequencyMap[value] = (frequencyMap[value] || 0) + 1;
        });

        let maxFrequency = 0;
        let modes = [];

        for (const key in frequencyMap) {
            const frequency = frequencyMap[key];
            if (frequency > maxFrequency) {
                maxFrequency = frequency;
                modes = [parseInt(key)];
            } else if (frequency === maxFrequency) {
                modes.push(parseInt(key));
            }
        }

        return { mode: modes, count: maxFrequency };
    }
    var() {
        const mean = this.mean();
        const squaredDifferences = this.data.map((value) => Math.pow(value - mean, 2));
        return this.sumArray(squaredDifferences) / this.count();
    }
    std() {
        return Math.sqrt(this.var());
    }
    freqDist() {
        const frequencyMap = {};
        this.data.forEach((value) => {
            frequencyMap[value] = (frequencyMap[value] || 0) + 1;
        });

        const distribution = Object.entries(frequencyMap)
            .map(([value, count]) => [count, parseInt(value)])
            .sort((a, b) => b[0] - a[0]);

        return distribution;
    }
    sumArray(arr) {
        return arr.reduce((total, value) => total + value, 0);
    }
    describe() {
        return `
Count: ${this.count()}
Sum: ${this.sum()}
Min: ${this.min()}
Max: ${this.max()}
Range: ${this.range()}
Mean: ${this.mean()}
Median: ${this.median()}
Mode: ${JSON.stringify(this.mode())}
Variance: ${this.var()}
Standard Deviation: ${this.std()}
Frequency Distribution: ${JSON.stringify(this.freqDist())}`;
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);

console.log(statistics.describe());


//2. CREATE A CLASS CALLED "PERSON ACCOUNT" THAT HAS : FIRST NAME, LAST NAME, INCOMES, EXPENSE PROPERTIES AND HAS
//   TOTAL INCOME, TOTAL EXPENSE, ACCOUNT INFO, ADD INCOME, ADD EXPENSE AND ACCOUNT BALANCE METHODS.


class PersonAccount {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = [];
        this.expenses = [];
    }

    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    }

    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    }

    totalIncome() {
        return this.calculateTotal(this.incomes);
    }

    totalExpense() {
        return this.calculateTotal(this.expenses);
    }

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }

    accountInfo() {
        return `
Account Holder: ${this.firstName} ${this.lastName}
Total Income: ${this.totalIncome()}
Total Expense: ${this.totalExpense()}
Account Balance: ${this.accountBalance()}
`;
    }

    calculateTotal(transactions) {
        return transactions.reduce((total, transaction) => total + transaction.amount, 0);
    }
}

// Example usage
const person = new PersonAccount("John", "Doe");

person.addIncome("Salary", 5000);
person.addIncome("Freelance Work", 1000);

person.addExpense("Rent", 1500);
person.addExpense("Groceries", 200);
person.addExpense("Utilities", 100);

console.log(person.accountInfo());
