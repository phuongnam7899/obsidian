---
- tags: [[]]
- created date: 2022-05-31
- source: 
---
```tsx
// Declare
interface Props<T> {
	oneProp: T;
}
function GenericComponent<T>(props: Props<T>) {}

// Using

<GenericComponent<T> />
```
---
- tags: [[Typescript]] [[ReactJS]]
---