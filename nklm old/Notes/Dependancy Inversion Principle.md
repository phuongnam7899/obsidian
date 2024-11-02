---
- tags: [[]]
- created date: 2022-06-09
- source: 
---

# Dependancy Inversion Principle
==You should depen upon abstrctions, not concretions==

## Bad
```ts
	...[^1]
	class App {
		private db: SQLDatabase | InmemoryDatabase;
		// Problem: The more db type we have, the more if-else, the more complex
		constructor(db: SQLDatabase | InmemoryDatabase){
			if (db instanceof SQLDatabase)	{db.connect('url')}
			this.db = db
		}
		saveSetting() {
			this.db.storeData('data')
		}
	}
```
## Good
```ts
	...[^1]
	class App {
		private db: Database;
		// Problem: The more db type we have, the more if-else, the more complex
		constructor(db: Database){
			this.db = db
		}
		saveSetting() {
			this.db.storeData('data')
		}
	}


	const sqlDb = new SqlDb()
	sqlDb.connect();
	const App = new App(sqlDb)
```
---
- tags: [[OOP principles (SOLID, Law of demeter)]]
---

[^1]:: Remaining interface check here [[Interface Segregation Principle]]