---
- tags: [[]]
- created date: 2022-06-07
- source: 
---

==Being as atomic as possible won't improve readability==

# Dont split if...
- Just renaming operation
```js
	// x
	function saveUser(email, password) {
		const user = buildUser(email, password);
		user.save();
	}
		
	function buildUser(email, password) {
		return {
			email: email,
			password: password,
		};

	// o
	class User {
		constructor(email, password) {
			this.email = email;		
			this.password = password;
		}

		save() {
			database.insert(this);
		}
	}
	function saveUser(email, password) {
		const user = new User(email, password);
		user.save();
	}
```
- Finding new function take longer than reading extracted code
- Can produce undestanable name for extracted part

---
- tags: [[When to split function]]
---