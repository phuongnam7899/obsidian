---
- tags: [[]]
- created date: 2022-06-06
- source: 
---

# Name casing
- snake_case: e.g. Python: variables, functions, methods 
- camelCase: e.g. Javascript: variables, functions, methods
- PascalCase: e.g. Python, Java, JS: Classes
- kebab-case: e.g. HTML: custom HTML elements, class name, id
=> This's only convention, not rules
# Variables & Constants
- Is data container
- Should use ==Nouns== (userAge) or ==short phrases adjective==(isValid)
- Detail: [[Naming Variable, Constants & Properties]]
# Functions/Method
- Commands or calculated value
- Should use ==Verbs== (validateData) or ==short phrases adjective== (emailIsValid)
- Detail: [[Naming functions-methods]]
# Classes
- To crate "things" (Product, User,...)
- Should use ==Nouns== (validateData) or ==short phrases nouns== (emailIsValid)
- Detail: [[Naming classes]]
# Exception
- If it's the name of ==library== declare
- If your ==whole team== follow that rule
# Common Errors
- Include ==redundant information== (the info that can be guess too easily) in name: productWithNameAnDate, personUser,...
- Using: 
	- ==Slang==: user.goToHell() => user.remove(), user.shutUp() => user.mute()
	- ==Unclear abbreviation==: val => value, validation
	- ==Disinformation==: userList = {...} => userList = [...]; allProducts = products.filter(...) => outDatedProducts = products.filter(...)
- Choose names that ==look similar== (=> hard to choose when need): getDailyData, getDayData, getDataOfDay,...
- ==Inconsistent==: 
	- buildHouse, getHome => buildHome, getHome
	- getProducts, fetchUser, retrieveUser, fetchProduct, getCourse => choose one
---
- tags: [[Clean Code]]
---