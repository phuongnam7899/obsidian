---
- tags: [[]]
- created date: 2022-06-09
- source: 
---

# ==Many client-specific interface better than one general purpose interface==
## Bad
```ts

// Try to cover many use case
interface Database {
	storeData(data: any);
	connect(uri: string);
}

class SQLDatabase implements Database {
	connect(uri: string) {}
	storeData(data: any) {}
}


// Problem: In memory db doesn't need connect()
class InMemoryDatabase implements Database {
	storeData(data: any) {
}

}
```
## Good
```ts
interface Database {
	storeData(data: any);
}

interface RemoteDatabase {
	connect(uri: string);
}

class SQLDatabase implements Database, RemoteDatabase {
	connect(uri: string) {}
	storeData(data: any) {}

}

class InMemoryDatabase implements Database {
	storeData(data: any) {}
}
```

---
- tags: [[OOP principles (SOLID, Law of demeter)]]
---