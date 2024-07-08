---
- tags: [[]]
- created date: 2022-06-09
- source: 
---

# ==Objects should be replaceable with instances of their subclasses without alterring the behavior==

```js
class Bird {}

class FlyingBird extends Bird {
	// If fly in Bird => Penguin may be confused
	fly() {
	console.log('Fyling...');
	}

}

class Eagle extends FlyingBird {
	dive() {
	console.log('Diving...');
	}
}

const eagle = new Eagle();

eagle.fly();

eagle.dive();

class Penguin extends Bird {

// Problem: Can't fly!

}
```
---
- tags: [[OOP principles (SOLID, Law of demeter)]]
---