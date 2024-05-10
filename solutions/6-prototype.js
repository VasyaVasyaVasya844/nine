// BEGIN
class Money {
    constructor(value, currency = 'usd') {
        this.value = value;
        this.currency = currency;
    }

    getValue() {
        return this.value;
    }

    getCurrency() {
        return this.currency;
    }

    exchangeTo(currency) {
        const rates = {
            usd: { eur: 0.7 },
            eur: { usd: 1.2 }
        };
        if (this.currency === currency) {
            return new Money(this.value, currency);
        } else {
            const newValue = this.value * rates[this.currency][currency];
            return new Money(newValue, currency);
        }
    }

    add(money) {
        if (this.currency === money.getCurrency()) {
            const newValue = this.value + money.getValue();
            return new Money(newValue, this.currency);
        } else {
            const convertedMoney = money.exchangeTo(this.currency);
            const newValue = this.value + convertedMoney.getValue();
            return new Money(newValue, this.currency);
        }
    }

    format() {
        const formattedValue = this.value.toLocaleString(undefined, {
            style: 'currency',
            currency: this.currency.toUpperCase()
        });
        return formattedValue;
    }
}

export default Money;

// END
