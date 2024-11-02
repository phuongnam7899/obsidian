---
- tags: [[]]
- created date: 2022-06-08
- source: 
---

[[How to avoid deeply nested control structure]]

[[Working with errors]]

# Factory Function & Polymorphism
## Factory function
- Is a function that use to produce (return) a value
```js
	function getTransactionProcessors(transaction) {
		let processors = {
		processPayment: null,
		processRefund: null,
		};
		if (usesTransactionMethod(transaction, 'CREDIT_CARD')) {
			processors.processPayment = processCreditCardPayment;
			processors.processRefund = processCreditCardRefund;
		} else if (usesTransactionMethod(transaction, 'PAYPAL')) {
			processors.processPayment = processPayPalPayment;
			processors.processRefund = processPayPalRefund;
		} else if (usesTransactionMethod(transaction, 'PLAN')) {
			processors.processPayment = processPlanPayment;
			processors.processRefund = processPlanRefund;
		}
		return processors;
}
```