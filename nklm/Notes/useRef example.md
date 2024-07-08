---
- tags: [[]]
- created date: 2022-05-31
- source: 
---

### Example: usePressHoldRepeate

```tsx
function usePressHoldRepeat(
  callback,
  holdDetectionThreshold = 300,
  repeatDelay = 100,
) {
  const [mouseDown, setMouseDown] = useState(false)
  const intervalRef = useRef(0)
  const holdDetectionTimeoutRef = useRef(0)
  const runCallback = useCallback(
    () => typeof callback === 'function' && callback(),
    [callback],
  )
  useEffect(() => {
    if (mouseDown) {
      holdDetectionTimeoutRef.current = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          runCallback()
        }, repeatDelay)
      }, holdDetectionThreshold)
      return () => {
        intervalRef.current && clearInterval(intervalRef.current)
        holdDetectionTimeoutRef.current &&
          clearTimeout(holdDetectionTimeoutRef.current)
      }
    } else {
      holdDetectionTimeoutRef.current &&
        clearTimeout(holdDetectionTimeoutRef.current)
      intervalRef.current && clearInterval(intervalRef.current)
    }
  }, [mouseDown, repeatDelay, runCallback, holdDetectionThreshold])
  return {
    onClick: runCallback,
    onMouseDown: (e) => {
      if (e.button === 0) setMouseDown(true)
    },
    onMouseUp: () => setMouseDown(false),
    onMouseOut: () => setMouseDown(false),
  }
}
```

### Anti-patterns

**Assign to ref.current in render**

```tsx
function App() {
  let someRef = useRef()
  someRef.current = '❌ Updating a ref is a side effect!'
  useEffect(() => {
    someRef.current = "✅ This is OK"
  })
  const handleClick = () => {
    someRef.current = "✅ This is OK too"
  }
  return ...
}
```

**Use ref.current in JSX and expect it to be reactive**

---
- tags: [[ReactJS]]
---