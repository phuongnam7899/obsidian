---
- tags: [[]]
- created date: 2022-06-09
- source: 
---

# ==A class should not be changed for more than one reason==
- One responsibility != On method
```js

// violating SRP
class ReportDocument {
	// 2 different un related actions
	generateReport() {}
	createPdf() {}
}

// Not violating
class User {
	login(){}
	signup(){}
	assignRole(){}
}

```

---
- tags: [[OOP principles (SOLID, Law of demeter)]]
---