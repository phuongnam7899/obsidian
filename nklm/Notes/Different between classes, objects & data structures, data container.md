# Classes, objects & data structures/container
## Object vs Data structure
### Object
- Private internals / properties, public API (method)
- Contain business logic (in OOP)
- Abtractions (dont care abount how thing work) over concretion
```js
class Database {
	private uri: string
	constructor() {}
	
	// Dont need to know how function work, just use it => abstract
	connect() {...}
	disconnect() {...}
}
```
### Data structure / Data container
- Public internals / properties, almost no API (methods)
- Store and transport data
- Concreations only
```js
class UserCredentials {
	public email: string;
	public password: string;
}
```



---
- tags: [[Objects, Classes and Data container, Data structures]]
---