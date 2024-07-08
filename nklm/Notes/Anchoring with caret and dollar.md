## Anchoring with caret and dollar
### Start anchor
- `^`:
	- Inside the `[]` => Negation
	- Outside the `[]` => Start of line
- `^foo.*`:
	- ==foo==bar: o
	- ==foo==baz: o
	- bazfoo: x
### End anchor
- `$`: mark the end of line
- `*.bar$`:
	- foo==bar==: o
	- baz==bar==: o
	- barfoo: x