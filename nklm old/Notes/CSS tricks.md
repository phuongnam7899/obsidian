# Counting children with CSS only
```css
.parent:has(:last-child:nth-child(1)){
	color: red
}
.parent:has(:last-child:nth-child(even)){
	color: red
}
```

[[CSS]]