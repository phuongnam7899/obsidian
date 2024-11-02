---
- tags: [[]]
- created date: 2022-06-07
- source: 
---

# Rule of thumbs
- Extract code that work on the same functionality
```js

	// x
	user.setAge()
	user.setName()
	
	// o
	user.update({age, name})

```
- Extract code that require more interpation than surrounding code
```js
	// x
	if (!email.includes('@')) {...} // 2 level of abstraction

	if (!isValid(email)) {...} // bring to the same level of abstraction
	
```

# Stay DRY
[[DRY principle]]

# Don't overdo split
[[Avoid overdo spliting code]]

---
- tags: [[Level of abstraction]]
---