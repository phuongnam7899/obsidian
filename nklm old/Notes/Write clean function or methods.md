---
- tags: [[]]
- created date: 2022-06-07
- source: 
---

# What makes a function?
- Both function declaration and function call should be clean:
	- ==Function call== clean => number and order of arguments matter
	- ==Function declaration== => length of body matter


# Clean each part
[[Clean function Parameters]]
[[Clean function body]]

# Understanding & advoid Side effect
[[Avoid side effect]]
# Unit test helps
- If not easy to test => May have more than 2 level of abstraction, have side effect,... => may be need to split
## Bad
```js

function addProduct(name, price) {
	// When tets fail, need to check this => not good
	if (!name || name.trim() === '' || !price || price < 0) {
		console.log('Invalid input - product was not created.');
	return;
	}

	const product = {
		id: name + '_' + Math.random().toString(),
		name: name,
		price: price,
	};

	database.insert('products', product); // This's side effect, each test affect the db
		return product;
	}

	describe(function () {
		it('should create a product for valid names and prices', function () {
		const createdProduct = addProduct('Carpet', 19);
		expect(createdProduct).not.toBeUndefined();
	});
});

```
## Good
```js
function addProduct(name, price) {
	validateProductData(name, price);
	const savedProduct = saveProduct(name, price);
	return savedProduct;
}

function validateProductData(name, price) {}

function inputIsValid(name, price) {
	return !isEmpty(name) && hasMinValue(price, 0);
}

function isEmpty(value) {}
```





tags: [[Function and Methods]]