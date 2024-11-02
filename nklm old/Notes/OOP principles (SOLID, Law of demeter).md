---
- tags: [[]]
- created date: 2022-06-09
- source: 
---
# OOP principles (SOLID, Law of demeter)
## Polymorphism
- Is the ability of an object to take many form (base on how you use it)
- Using `extends` to inheritance
- Using interface/implement
- When have many if statements, may be need to create inheritance classes
## Class should be small
- Many small > few big
- SRP - Single Responsibility Principle: 1 class - 1 responsibility for specific thing
### Bad
```js
class OnlineShop {

private orders: any;
private offeredProducts: any;
private customers: any;


public addProduct(title: string, price: number) {}

public updateProduct(productId: string, title: string, price: number) {}

public getAvailableItems(productId: string) {}

public createCustomer(email: string, password: string) {}

public makePurchase(customerId: string, productId: string) {}

public refund(orderId: string) {}

public updateCustomerProfile(customerId: string, name: string) {}

// ...

}
```
### Good
```js

class Order {
	public refund() {}
}

class Customer {

	private orders: Order[];
	
	constructor(email: string, password: string) {}
	public login(email: string, password: string) {}
	public updateProfile(name: string) {}
	public makePurchase(productId: string) {}
}

class Product {

	constructor(title: string, price: number) {}
	
	public update(Id: string, title: string, price: number) {}
	public remove(Id: string) {}

}

class Inventory {

	private products: Product;
	
	public getAvailableItems(productId: string) {}
	public restockProduct(productId: string) {}

}

```
## Cohesion
 ==How much are methods using class properties==
 - Maximum: All method use all properties => highly cohesive
 - No cohesion: No method use any propperties => Data structure/container with utility methods

## Law of Demeter
[[Law of demeter]]
## SOLID principle to write classes
- S: [[Single Responsibility Principle]]
- O: [[Open-Closed Principle]]
- L: [[Liskov Substitution Principle]]
- I: [[Interface Segregation Principle]]
- D: [[Dependancy Inversion Principle]]

---
- tags: [[Objects, Classes and Data container, Data structures]] [[OOP]]
---